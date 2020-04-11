import React, { Component } from "react";
import megalosaurus from "./img/Megalosaurus.jpg";
import { NavLink, HashRouter } from "react-router-dom";
import melanorosaurus from "./img/Melanorosaurus.jpg";
import procompsognathus from "./img/Procompsognathus.jpg";
import eoraptor from "./img/Eoraptor.jpg";

const API = 'AIzaSyBFY77mO-IUIqIww3nKmKjvuY4ap3hD1x8';
const channelID = 'UCKIojG717kcccLN6VCfPhnQ';
const maxResults = 4;

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

    render () {
        return (
            <div>
                <div>
                    <h2>Dinosaurs of the Triassic Period</h2>
                    <div class="row"></div>
                    <h3>Carnivorous Dinosaurs</h3>
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
            </div>
        );
    }
}

export default Playlist;