//   Author:       Moya Goleski
//   File:         Header.js
//   Last Updated: 01/17/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'

export default function Header() {
    return (
      <div>
        <header>
          <nav className="nav">
            <img src="logo512.png" alt="react logo" className="nav-logo"/>
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