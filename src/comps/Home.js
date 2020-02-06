import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MyBar from './NavBar';
import '../styles/app.css';


export const Home = () => (
  <div>
  <Container id="jumboTronContainer1">
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
