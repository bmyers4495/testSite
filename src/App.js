import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './comps/Home';
import About from './comps/About';
import NavBar from './comps/NavBar';
// import Contact from './comps/Contact';
// import Testomonials from './comps/Testomonials';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar />
          <Router>
              <Switch>
                  <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                  <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
              </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
