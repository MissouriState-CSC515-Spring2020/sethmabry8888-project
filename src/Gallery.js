import React, { Component } from "react";
import {
    NavLink,
    HashRouter
} from "react-router-dom";
import megalosaurus from "./img/Megalosaurus.jpg";

class Gallery extends Component {
    render () {
        return (
            <div>
                <div>
                    <h2>Gallery</h2>
                    <div class="row"></div>
                    <h3>Triassic Period</h3>
                </div>
                <div class="row">
                    <HashRouter>
                        <div class="col-lg-3 col-sm-6 pic-box justify-content-center">
                            <NavLink to="/triassic-period">
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