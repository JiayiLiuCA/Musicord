import React, {useState} from 'react'
import './Footer.css'

const Footer = ({handleChatText}) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text) {
            handleChatText(text);
            setText('');
        }
        else {
            alert('input is required');
        }
    }


    return (
        <div className="footer">
            <div id="input-container">
                <input
                    id="msg"
                    type="text"
                    placeholder="Enter Message"
                    autoComplete="off"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="chat-button" onClick={() => handleSubmit()}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Footer
