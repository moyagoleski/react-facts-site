//   Author:       Moya Goleski
//   File:         index.js
//   Last Updated: 01/16/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Header() {
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

function MainContent() {
  return (
    <div>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Goleski development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )

}

ReactDOM.render(<Page />, document.getElementById("root"))