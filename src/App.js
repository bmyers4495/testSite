import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './styles/app.css';
import './assets/favicon.ico'

class Mybar extends Component {
  render() {
    return (
      <Navbar bg = "light"
      expand = "lg" >
      <Navbar.Brand href = "#home" >
          <img alt='icon' src={require('./assets/favicon.ico')}/>
          Cultivating Hearts
      < /Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" / >
      <Navbar.Collapse id = "basic-navbar-nav" >
      <Nav className = "mr-auto" >
      <Nav.Link href = "#home" > Home < /Nav.Link>
      <Nav.Link href = "#about" > About < /Nav.Link>
      <Nav.Link href = "#contact" > Contact < /Nav.Link>
      <Nav.Link href = "#testimonials" > Testimonials < /Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar >
    );
  }
};

class Index extends Component{
  render() {
    return (
      <div>
      <Mybar />
      <Container id="jumboTronContainer">
        <Jumbotron>
          <h1>Cultivating Hearts of Tomorrow</h1>
          <hr/>
            <p>
            Pure and undefiled religion before God and the Father is this: to visit orphans and widows in their trouble, and to keep oneself unspotted from the world. - James 1:27
            </p>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}
export default Index;
