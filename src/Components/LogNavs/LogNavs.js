import React, { useState } from "react";
import { Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../LogNavs/LogNavs.css"

const LogNavs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    console.log("slideOpen");
    setShow(true);
  };
  return (
    <div className="Navs">
      <Navbar bg="dark" variant="dark" >
        <div>
          <Button variant="dark" onClick={handleShow}>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </Button>
        </div>
        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <h1> somthim</h1>
                <hr />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="main">
          <a className="navbar-brand">
            <img
              src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000"
              alt=""
              width="50"
              height="40"
            />  
          </a>
        </div>
        <Container >
          <Navbar.Brand>
            <h4 className="logo-title">Management</h4></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
          <div className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default LogNavs;