import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div id="input-container">
                <input
                    id="msg"
                    type="text"
                    placeholder="Enter Message"
                    autoComplete="off"
                />
                <button className="chat-button">
                    Send
                </button>
            </div>
        </div>
    )
}

export default Footer
