import "./Navigation.css"
import { NavLink } from "react-router-dom"

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="nav-background-color"></div>
      <div className="nav-bar">
        <NavLink to="/home" replace>
          <div className="logo"></div>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/home" activeClassName="active-link" replace>
              Home
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/about" activeClassName="active-link" replace>
              {" "}
              About Us{" "}
            </NavLink>{" "}
          </li>

          <li>
            {" "}
            <NavLink to="/projects" activeClassName="active-link" replace>
              Projects
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/contact" activeClassName="active-link" replace>
              Contact Us
            </NavLink>{" "}
          </li>
        </ul>
        <div
          className="menu"
          onClick={() => {
            props.Menu()
          }}
        >
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <div
          className="donate-button"
          onClick={() => {
            props.Modal()
          }}
        >
          DONATE
        </div>
      </div>
    </div>
  )
}

export default Navigation
