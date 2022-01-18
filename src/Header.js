//   Author:       Moya Goleski
//   File:         Header.js
//   Last Updated: 01/17/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import ReactLogo from './images/logo512.png'

export default function Header() {
    return (
      <div>
        <header>
          <nav className="nav">
            <img
                src={ReactLogo}
                alt="React Logo"
                className="nav-logo"
            />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    )
}

// OR
// export default Header