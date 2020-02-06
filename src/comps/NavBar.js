import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class MyBar extends Component {
  render() {
    return (
      <Navbar bg = "light"
      expand = "lg" >
      <Navbar.Brand href = "#home" >
          <img alt='icon' src={require('../assets/favicon.ico')}/>
          Cultivating Hearts
      </Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" / >
      <Navbar.Collapse id = "basic-navbar-nav" >
      <Nav className = "mr-auto" >
      <Nav.Link href = "/" > Home < /Nav.Link>
      <Nav.Link href = "/about" > About < /Nav.Link>
      <Nav.Link href = "#contact" > Contact < /Nav.Link>
      <Nav.Link href = "#testimonials"  disabled> Testimonials < /Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar >
    );
  }
};

export default MyBar;
