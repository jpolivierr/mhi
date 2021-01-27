import React from "react"
import "./Quicknav.css"
import { NavLink } from "react-router-dom"

const Quicknav = (props) => {
  return (
    <ul className="quick-nav">
      <div
        className="close-btn quick-nav-close-btn"
        onClick={() => props.Modal()}
      >
        +
      </div>
      <h3>Navigation</h3>
      <NavLink to="/home">
        <li onClick={() => props.Modal()} > Home </li>
      </NavLink>
      <NavLink to="/about">
        <li onClick={() => props.Modal()} >About Us</li>
      </NavLink>
      <NavLink to="/projects">
        <li onClick={() => props.Modal()}>Projects</li>
      </NavLink>
      <NavLink to="/contact">
        <li onClick={() => props.Modal()}>Contact Us</li>
      </NavLink>
    </ul>
  )
}

export default Quicknav
