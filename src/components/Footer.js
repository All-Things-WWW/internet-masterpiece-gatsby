import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>&copy; Copyright {new Date().getFullYear()}          </span>
        <span>&bull;</span>
        <span> All rights reserved.</span>
        <span>&bull;</span>
        <a href="https://www.allthingswww.com"> All Things WWW</a>
      </div>
    </footer>
  </div>
)
