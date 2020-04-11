import React, { Component } from "react";
import {
    NavLink,
    HashRouter
} from "react-router-dom";
import megalosaurus from "./img/Megalosaurus.jpg";
import melanorosaurus from "./img/Melanorosaurus.jpg";
import procompsognathus from "./img/Procompsognathus.jpg";
import eoraptor from "./img/Eoraptor.jpg";

const API = 'AIzaSyBFY77mO-IUIqIww3nKmKjvuY4ap3hD1x8';
const channelID = 'UCa37IMrH8BGS_pO6CKbTL-A';
const maxResults = 8;

// the url with API key

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;

class Playlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            resultyt: []
        };
    }

    async componentDidMount() {
        const response = await fetch(finalURL);
        const data = await response.json();
        const resultyt = data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        console.log(resultyt);
        this.setState({ resultyt, loading: false });
    }

    // {
    //     this.state.resultyt.map((link, i) => {
    //         console.log(link);
    //         var frame = <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    //         return frame;
    //     })
    // }
    // {this.frame}

    render () {
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <h2>The Best of Dinosaurs</h2>
                    </div>
                </div>
                <div class="row">
                    {
                        this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item p-3" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                        return frame;
                        })
                    }
                    {this.frame}
                    {/* <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={melanorosaurus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={procompsognathus}/>
                    </div>
                    <div class="col-xl-3 col-md-6 pic-box justify-content-center">
                        <img class="img-fluid" src={eoraptor}/>
                    </div> */}
                </div>
                {/* <div class="row">
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
                </div> */}
            </div>
        );
    }
}

export default Playlist;