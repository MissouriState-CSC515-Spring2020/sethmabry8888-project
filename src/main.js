import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
//import BestOf from "./BestOf";
//import Playlist from "./Playlist";
//import Description from "./Description";

const BestOf = lazy(() => import('./BestOf'));
const Playlist = lazy(() => import('./Playlist'));
const Description = lazy(() => import('./Description'));

class Main extends Component {

  state = {
    playlist: null

  }



  render() {
    return (
      <Router>
        <div class="container">
          <Nav />
          <Suspense fallback={<div className="loading">LOADING...</div>}>
            <Switch>
              <div className="content">
                <Route exact path="/" component={BestOf} />
                <Route exact path="/triassic-period" component={Playlist} />
                <Route exact path="/triassic-period/megalosaurus" component={Description} />
              </div>
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default Main;