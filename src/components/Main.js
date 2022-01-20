//   Author:       Moya Goleski
//   File:         Main.js
//   Last Updated: 01/19/2022
//   Source: https://www.youtube.com/watch?v=bMknfKXIFA8

import React from 'react'

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun Facts about React</h1>
                <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}