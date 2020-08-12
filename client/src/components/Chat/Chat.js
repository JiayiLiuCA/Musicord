import React, { useState,useEffect,useRef } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
import Sidebar from './ChatComponents/Sidebar/Sidebar'
import Header from './ChatComponents/Header/Header'
import Footer from './ChatComponents/Footer/Footer'
import Content from './ChatComponents/Content/Content'

const Chat = ({location}) => {
    // State hooks
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [usernameList, setUsernameList] = useState([]);
    // Welcome message on init
    const [messages, setMessages] = useState([{username: 'Musicord bot', text :'Welcome to Musicord'}]);

    // Socket Ref
    const socketRef = useRef(null)

    const ENDPOINT = 'localhost:5000'


    // Handle user chat input message
    const handleChatText = text => {
        let socket = socketRef.current;
        if (socket) {
            console.log(socket);
            setMessages(messages => [...messages, {username, text}])
            socket.emit('chatMessage', ({username: username, room: room, text: text}))
        }
    }

    // Once after mount
    useEffect(() => {
        // Connect and set socketRef
        socketRef.current = io(ENDPOINT);
        let socket = socketRef.current;
        
        // Set username and room
        const { username, room } = queryString.parse(location.search);
        setUsername(username);
        setRoom(room);
        
        // User join room

        // Emit join to server
        socket.emit('join', {username,room});
        // update usernameList when user join and other users leave
        socket.on('curUsernameList', usernameList => {
            setUsernameList(usernameList);
        })
        // Listen to user join
        socket.on('userJoin', username => {
            setUsernameList(usernameList => [...usernameList, username]);
        })
        // Listen to server chat message
        socket.on('chatMessage', ({username, text}) => {
            setMessages(messages => [...messages, {username, text}]);
        })

        // Disconnect cleanup
        return () => {
            socket.disconnect();
        }
    }, []);

    

    return (
        <div className="chat-outer-container">
            <div className="chat-container">
                <Header />
                <div className="mid">
                    <Sidebar room={room} usernameList={usernameList}/>
                    <Content messages={messages}/>
                </div>
                <Footer handleChatText={handleChatText}/>
            </div>
            
        </div>
    )
}

export default Chat
