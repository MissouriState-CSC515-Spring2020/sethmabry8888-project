import React, { Component } from 'react';

const API = 'AIzaSyBFY77mO-IUIqIww3nKmKjvuY4ap3hD1x8';
const channelID = 'UCa37IMrH8BGS_pO6CKbTL-A';
const maxResults = 10;

// the url with API key

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(responseJson);
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
            this.setState({resultyt});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        // console.log(finalURL);
        console.log(this.state.resultyt);
        return (
            <div>
                <button onClick={this.clicked}>Get youtube vids</button>
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        return frame;
                    })
                }
                {this.frame}
            </div>
        )
    }
}

export default Youtube;