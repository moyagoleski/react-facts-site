//   Author:       Moya Goleski
//   File:         App.js
//   Last Updated: 01/17/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

// OR
// export default App