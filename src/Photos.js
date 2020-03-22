import React, { Component } from "react";
import megalosaurus from "./img/Megalosaurus.jpg";
import { NavLink, HashRouter } from "react-router-dom";
import melanorosaurus from "./img/Melanorosaurus.jpg";
import procompsognathus from "./img/Procompsognathus.jpg";
import eoraptor from "./img/Eoraptor.jpg";

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
                        <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                            <NavLink to ="/triassic-period/megalosaurus">
                                <img class="img-fluid" src={megalosaurus} alt="dino"/>
                            </NavLink>
                        </div>
                    </HashRouter>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={melanorosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={procompsognathus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={eoraptor}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;