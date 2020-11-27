import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import{Link} from "react-router-dom"


function Navigation() {
 
  const activeStyle={
    fontWeight:'bold',

  }

    return (
        <>
          <Navbar bg="light" expand="lg">
  <Navbar.Brand to="/home"><h3 className="mt-2">RAKIB PRO </h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-5">
      <Link className="nav-link"style={activeStyle} exact to="/home">HOME</Link>
      <Link className="nav-link"style={activeStyle} to="/about">ABOUT</Link>
      <Link   className="nav-link" style={activeStyle} to="/project">PROJECT</Link>
      <Link    className="nav-link"style={activeStyle} to="/contact">CONTACT</Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default Navigation;
