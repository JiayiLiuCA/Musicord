import React from 'react'
import './Content.css'
import Message from './Message'

const Content = ({ messages}) => {
    return (
        <div className="content">
            {messages.map((message,index) => (
                <Message message={message} key={`${message}${index}`} />
            ))}
        </div>
    )
}

export default Content
