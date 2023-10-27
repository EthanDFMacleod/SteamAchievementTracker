import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/SAT.svg';
import "../Styles/NavBar.css"

function NavBar() {
  return (
    <div>
        <div className="nav-bar">
            <Link className="logo" to="/"><Logo/></Link>
            <div className = "nav-items">
                <Link className="nav-item" to="/">Learn</Link>
                <Link className="nav-item" to="/">Start</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar