import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
        <h1>Dinosaurs of the Mesozoic Era</h1>
        <ul className="header">
            <li><Link exact to="/">Best Of Videos</Link></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Playlists
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link exact to="/triassic-period" class="dropdown-item" id="dropdown">Triassic Period</Link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Dinosaurs
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link exact to="/triassic-period/megalosaurus" class="dropdown-item" id="dropdown">Megalosaurus</Link>
                </div>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;
