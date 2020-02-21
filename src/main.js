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
            <div>
            <h1>Dinosaurs of the Mesozoic Era</h1>
            <ul className="header">
                <li><NavLink exact to="/">Gallery</NavLink></li>
                <li><NavLink exact to="/triassic-period">Photos</NavLink></li>
                <li><NavLink to="/triassic-period/carnivorous-dinosaurs">Description</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Gallery}/>
                <Route exact path="/triassic-period" component={Photos}/>
                <Route path="/triassic-period/carnivorous-dinosaurs" component={Description}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;