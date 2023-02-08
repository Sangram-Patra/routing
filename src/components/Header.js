import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';
export default function Header() {
  return (
    <div>
      <div className="navBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
      </div>
    </div>
  )
}
