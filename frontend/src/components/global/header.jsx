import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppHeader() {

  const [hpage, setHpage] = useState(false);
  const [fpage, setFpage] = useState(false);

  useEffect(() => {
    const currentpage = window.location.pathname;
    console.log(currentpage);
    if (currentpage === "/proj001/") {
      setHpage(true);
      
    } else if (currentpage === "/proj001/features") {
      setFpage(true);
    } else {
      setFpage(false);
      setHpage(false);
    }
  })

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CubicX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={hpage} href="proj001/" >Home</Nav.Link>
            <Nav.Link active={fpage} href="proj001/features">Features</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/docs">Docs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><i></i>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default AppHeader