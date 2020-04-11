import React from "react";


const API = 'AIzaSyBFY77mO-IUIqIww3nKmKjvuY4ap3hD1x8';
const channelID = 'UCa37IMrH8BGS_pO6CKbTL-A';
const maxResults = 10;

// the url with API key

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;

export default class FetchRandomUser extends React.Component {
    
    state = {
        loading: true,
        videoJson: []
    }

    async componentDidMount() {
        const response = await fetch(finalURL);
        const data = await response.json();
        this.setState({ videoJson: data.items, loading: false });
    }

    render() {
        return <div>
            {this.state.loading || !this.state.videoJson ? (
                <div>loading...</div>
            ) : (
                <div>
                    <div>{this.state.person.name.title}</div>
                    <div>{this.state.person.name.first}</div>
                    <div>{this.state.person.name.last}</div>
                    <img src={this.state.person.picture.large}/>
                </div>
            )}
        </div>;
    }
}