import React from 'react'
import './Message.css'

const Message = ({ message }) => {
    return (
        <div className="message">
            <p style={{fontSize: '13px', margin: '0'}}>{message.username}</p>
            <p style={{fontSize: '16px', margin: '0'}}>{message.text}</p>
        </div>
    )
}

export default Message
