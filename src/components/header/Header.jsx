import React from 'react'
import './header.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import logo from './97525-code-dark.json'

const Header = () => {
    return (
        <div className='header'>
            <Player
                autoplay
                loop
                src={logo}
                className='animation-left'
                style={{ height: '100px', width: '300px' }}
            >
            </Player>
            <h4 className='header-title'>Sites Story</h4>
            <div className="bar"></div>
        </div>
    )
}

export default Header
