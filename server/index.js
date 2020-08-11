const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Run when cliend connects
io.on('connection', socket => {
    console.log('We have a new connection');

    // User join room
    socket.on('join', ({name,room}) => {
        //console.log(name, room);
        socket.join(room);

        // Welcome user
        socket.emit('message','Welcome to Musicord')
        // Broadcast to other users in the room
        socket.broadcast
            .to(room)
            .emit('message', `${name} has joined the chat`)
        
        //socket.broadcast.emit('message', `${name} has joined the room`)

        
    })

    socket.on('disconnect', () => {
        console.log('A user left lol')
    })

    //socket.emit('message', 'Welcome to Musicord');
    //socket.broadcast.emit('message', 'A user has joined the room')

    //User disconnect
    
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))