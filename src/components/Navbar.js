//   Author:       Moya Goleski
//   File:         Navbar.js
//   Last Updated: 01/17/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import ReactLogo from '../images/logo512.png'

export default function Navbar(){
    return (
        <nav>
            <img
                src={ReactLogo}
                alt="React Logo"
                className="nav--icon"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}