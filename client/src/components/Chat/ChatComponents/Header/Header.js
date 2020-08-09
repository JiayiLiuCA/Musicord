import './Header.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="logo" >
                <strong>Musicord</strong>
            </div>
            <div className="leave-room">
                <Link to="/">
                    <button>Leave</button>
                </Link>
            </div>
        </div>
    )
}

export default Header
