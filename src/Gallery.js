import React, { Component } from "react";
import {
    NavLink,
    HashRouter
} from "react-router-dom";
import megalosaurus from "./img/Megalosaurus.jpg";
import melanorosaurus from "./img/Melanorosaurus.jpg";
import procompsognathus from "./img/Procompsognathus.jpg";
import eoraptor from "./img/Eoraptor.jpg";

class Gallery extends Component {
    render () {
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <h2>Gallery</h2>
                        <h3>Triassic Period</h3>
                    </div>
                </div>
                <div class="row">
                    <HashRouter>
                        <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                            <NavLink to="/triassic-period">
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
                <div class="row">
                    <div class="col">
                        <h3>Jurassic Period</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus} alt="dino"/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h3>Cretaceous Period</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus} alt="dino"/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={megalosaurus}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;