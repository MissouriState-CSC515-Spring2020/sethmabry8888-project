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
                <h2>Carnivorous Dinosaurs</h2>
                </div>
                <div class="row">
                    <div class="col pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus} alt="dino"/>
                    </div>
                    <div class="col">
                        <p>Here is a description of my amazing dinosaur</p>
                    </div>
                </div>
          </div>
        );
    }
}

export default Description;