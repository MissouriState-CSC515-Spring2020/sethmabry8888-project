import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import megalosaurus from "./img/Megalosaurus.jpg";

const API = 'AIzaSyBFY77mO-IUIqIww3nKmKjvuY4ap3hD1x8';
const channelID = 'UCa37IMrH8BGS_pO6CKbTL-A';
const maxResults = 8;

// the url with API key

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            loading: true,
            resultyt: []
        };
    }

    async componentDidMount() {
        const response = await fetch(finalURL);
        this.state.data = await response.json();
        console.log(this.state.data.items[0]);
        const resultyt = this.state.data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        console.log(resultyt);
        this.setState({ resultyt, loading: false });
    }

    render () {
        return (
            <div>  
                <div class="row">
                <h2>Megalosaurus</h2>
                </div>
                <div class="row">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item p-3" width="560" height="315" src={this.state.resultyt[0]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div class="col-12 p-3">
                        {this.state.loading || !this.state.data ? (
                            <div>loading...</div>
                        ) : (
                            <div>
                                <p>Title: {this.state.data.items[0].snippet.title}</p>
                                <p>Upload date: {this.state.data.items[0].snippet.publishedAt}</p>
                                <p>Channel Title: {this.state.data.items[0].snippet.channelTitle}</p>
                                <p>Description: {this.state.data.items[0].snippet.description}</p>
                            </div>
                        )}
                    </div>
                </div>
          </div>
        );
    }
}

export default Description;