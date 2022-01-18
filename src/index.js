//   Author:       Moya Goleski
//   File:         index.js
//   Last Updated: 01/17/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import ReactDOM from 'react-dom'
// "./" means you're talking about your own file
// and not a package that's in your dependencies 
import App from "./App.js"
import './style.css'

ReactDOM.render(<App />, document.getElementById("root"))
