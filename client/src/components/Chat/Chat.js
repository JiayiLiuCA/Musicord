import React, { useState,useEffect } from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'

import './Chat.css'
import Sidebar from './ChatComponents/Sidebar/Sidebar'
import Header from './ChatComponents/Header/Header'
import Footer from './ChatComponents/Footer/Footer'
import Content from './ChatComponents/Content/Content'

const Chat = ({location}) => {
    const [userList, setUserList] = useState([]);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        // Connect
        let socket = io(ENDPOINT);

        const { name, room } = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        setUserList(userList => [...userList, name]);

        // User join room
        socket.emit('join', {name,room});
        socket.on('message', message => {
            console.log(message);
        })

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, []);

    return (
        <div className="chat-outer-container">
            <div className="chat-container">
                <Header />
                <div className="mid">
                    <Sidebar room={room} userList={userList}/>
                    <Content />
                </div>
                <Footer />
            </div>
            
        </div>
    )
}

export default Chat
