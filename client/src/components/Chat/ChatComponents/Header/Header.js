import './Header.css'

import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="logo" >
                <strong>Musicord</strong>
            </div>
            <div className="leave-room">
                <button>Leave</button>
            </div>
        </div>
    )
}

export default Header
