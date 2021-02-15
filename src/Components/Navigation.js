import React from 'react';
//import  {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap'
 
const Navigation = () => {
    return (
         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Weather App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="localweather">Local-Weather</Nav.Link>
      <Nav.Link href="forecast">Forecast</Nav.Link>
       <Nav.Link href="about">About-ReadMe</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>  
    );
}
 
export default Navigation;
