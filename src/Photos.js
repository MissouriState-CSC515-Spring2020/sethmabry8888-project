import React, { Component } from "react";
import megalosaurus from "./img/Megalosaurus.jpg";
import { NavLink, HashRouter } from "react-router-dom";

class Gallery extends Component {
    render () {
        return (
            <div>
                <div>
                    <h2>Dinosaurs of the Triassic Period</h2>
                    <div class="row"></div>
                    <h3>Carnivorous Dinosaurs</h3>
                </div>
                <div class="row">
                    <HashRouter>
                        <div class="col-lg-3 col-sm-6 pic-box justify-content-center">
                            <NavLink to ="/triassic-period/carnivorous-dinosaurs">
                                <img class="img-fluid" src={megalosaurus} alt="dino"/>
                            </NavLink>
                        </div>
                    </HashRouter>
                    <div class="col-lg-3 col-sm-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-lg-3 col-sm-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-lg-3 col-sm-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;