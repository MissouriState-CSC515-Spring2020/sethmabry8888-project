import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Gallery from "./Gallery";
import Photos from "./Photos";
import Description from "./Description";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div class="container">
            <h1>Dinosaurs of the Mesozoic Era</h1>
            <ul className="header">
                <li><NavLink exact to="/">Gallery</NavLink></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Albums
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink exact to="/triassic-period" class="dropdown-item" id="dropdown">Triassic Period</NavLink>
{/*                        <NavLink exact to="/triassic-period" class="dropdown-item">Jurassic Period</NavLink>
                      <NavLink exact to="/triassic-period" class="dropdown-item">Cretaceous Period</NavLink> */}
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      All Dinosaurs
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink exact to="/triassic-period/megalosaurus" class="dropdown-item" id="dropdown">Megalosaurus</NavLink>
{/*                        <NavLink exact to="/triassic-period" class="dropdown-item">Jurassic Period</NavLink>
                      <NavLink exact to="/triassic-period" class="dropdown-item">Cretaceous Period</NavLink> */}
                    </div>
                </li>
                
            </ul>
            <div className="content">
                <Route exact path="/" component={Gallery}/>
                <Route exact path="/triassic-period" component={Photos}/>
                <Route path="/triassic-period/megalosaurus" component={Description}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;