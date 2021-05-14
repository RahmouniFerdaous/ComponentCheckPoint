import React from 'react';
 
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';



const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item className="landing-Container" href="#action/3.1">CSS layout</NavDropdown.Item>
        <NavDropdown.Item className="landing-Container"  href="#action/3.2">React Js</NavDropdown.Item>
        <NavDropdown.Item className="landing-Container" href="#action/3.3">Laravel</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item className="landing-Container" href="#action/3.4">GitHub Link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Resume</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Menu

