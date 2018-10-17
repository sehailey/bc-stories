import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className="mb-5 navbar navbar-expand-lg sticky-top navbar-dark bg-dark navbar-fixed-top">
    <NavLink className="navbar-brand" to="/">
      Stories
    </NavLink>
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">
            Add Story
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/read">
            Retrieve Story
          </NavLink>
        </li>
      </ul>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" />
    </div>
  </nav>
)

export default Navbar
