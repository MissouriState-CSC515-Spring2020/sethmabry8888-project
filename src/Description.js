import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import megalosaurus from "./img/Megalosaurus.jpg";

class Description extends Component {
    render () {
        return (
            <div>  
                <div class="row">
                <h2>Megalosaurus</h2>
                </div>
                <div class="row">
                    <div class="col-12 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus} alt="dino"/>
                    </div>
                    <div class="col-12 p-3">
                        <p>The Megalosaurus is actually from the Middle Jurassic Period!</p>
                    </div>
                </div>
          </div>
        );
    }
}

export default Description;