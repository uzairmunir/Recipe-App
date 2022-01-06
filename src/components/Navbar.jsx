import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggle = () => setToggleMenu(!toggleMenu)
  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo">
          <img src={logo} alt="nav-img" />
        </div>
        <ul>
          <li>
            <Link to="/" activeClassName="nav-active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" activeClassName="nav-active">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/tags" activeClassName="nav-active">
              Tags
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="nav-active">
              About
            </Link>
          </li>
          <div className="nav-btn">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </ul>

        <div
          className={toggleMenu ? "close-toggle" : "toggle-menu"}
          onClick={handleToggle}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
      {toggleMenu && (
        <ul className="toggle-list slide-bottom">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </>
  )
}

export default Navbar
