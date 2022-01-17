//   Author:       Moya Goleski
//   File:         index.js
//   Last Updated: 01/16/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const page = (
  <div>
    <img src="logo512.png" width="40px"/>
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

ReactDOM.render(page, document.getElementById("root"))
