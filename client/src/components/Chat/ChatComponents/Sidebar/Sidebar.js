import React from 'react'
import './Sidebar.css'


const Sidebar = ({ room, userList }) => {
    return (
        <div className="sidebar">
            <div className="room">
                <h3>Room Name:</h3>
                <p style={{ fontSize: '22px' }}>{room}</p>

            </div>
            <div className="users">
                <h3>Users</h3>
                {userList.map(
                    user => <p key={user} style={{ fontSize: '22px' }}>{user}</p>
                )}
            </div>

        </div>
    )
}

export default Sidebar
