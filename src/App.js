import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <div>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
          </div>

      </React.Fragment>
    );
  }
}

export default App;
