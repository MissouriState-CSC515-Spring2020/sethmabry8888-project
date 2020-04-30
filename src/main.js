import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import BestOf from "./BestOf";
import Playlist from "./Playlist";
import Description from "./Description";

class Main extends Component {

  state = {
    playlist: null

  }



  render() {
    return (
        <Router>
            <div class="container">
              <Nav />
                <Switch>
                <div className="content">
                  <Route exact path="/" component={BestOf}/>
                  <Route exact path="/triassic-period" component={Playlist}/>
                  <Route exact path="/triassic-period/megalosaurus" component={Description}/>
                </div>
              </Switch>
            </div>
        </Router>
    );
  }
}
 
export default Main;