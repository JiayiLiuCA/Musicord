const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, getUser, removeUser, getUsernameList } = require('./users')

const PORT = process.env.PORT || 5000;

const router = require('./router');
const users = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Run when cliend connects
io.on('connection', socket => {
    console.log('We have a new connection');

    // User join room
    socket.on('join', ({username,room}) => {

        // Add user to userList
        const user = addUser(socket.id, username, room);
        // Join room
        socket.join(user.room);

        console.log("add user " , username)
        // Emit curUsernameList to joined user
        socket.emit('curUsernameList', getUsernameList(user.room));
        // Broadcast userjoin event to other users in the room, username only
        socket.broadcast
            .to(user.room)
            .emit('userJoin', user.username);
        socket.broadcast
            .to(user.room)
            .emit('chatMessage', {username: 'Musicord bot', text: `${user.username} has joined the chat`})
    })

    // Listen to client chat message and broadcast to room
    socket.on('chatMessage', ({username, room, text}) => {
        socket.broadcast
            .to(room)
            .emit('chatMessage', {username, text})
    })

    socket.on('disconnecting', () => {
        let user = getUser(socket.id);
        console.log(user);
        socket.broadcast
            .to(user.room)
            .emit('chatMessage', {username: 'Musicord bot', text: `${user.username} has left the chat`})
        socket.broadcast
            .to(user.room)
            .emit('userLeft', user.username)
        console.log(user.username , "left")
        removeUser(socket.id);
    })
    

    socket.on('disconnect', () => {
        console.log(`A user has left the chat`)
    })
    
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))