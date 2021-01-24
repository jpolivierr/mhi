import React from 'react'
import './Quicknav.css'

const Quicknav = (props) => {
    
    return (
        <ul className='quick-nav'>
            <div className="close-btn quick-nav-close-btn" onClick={() => props.Modal()}>
          +
        </div>
            <h3>Navigation</h3>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact Us</li>
        </ul>
    )
}

export default Quicknav
