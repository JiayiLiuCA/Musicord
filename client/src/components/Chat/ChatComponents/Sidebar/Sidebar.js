import React from 'react'
import './Sidebar.css'



const Sidebar = ({ room, usernameList }) => {
    return (
        <div className="sidebar">
            <div className="room">
                <h3>Room Name:</h3>
                <p style={{ fontSize: '20px', margin: '0'}}>{room}</p>

            </div>
            <div className="users">
                <h3>Users</h3>
                {usernameList.map(
                    (username,index) => <p key={`${username}${index}`} style={{ fontSize: '20px' }}>{username}</p>
                )}
            </div>

        </div>
    )
}

export default Sidebar
