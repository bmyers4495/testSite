import React, { Component } from 'react';
import { Home } from './comps/Home';
import About from './comps/About';
import NavBar from './comps/NavBar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Contact from './comps/Contact';
// import Testomonials from './comps/Testomonials';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <NavBar />
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/else/" component={About} />
            </Switch>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
