import React, { useState } from "react";
import { Navbar, Container, FormControl, Button, Nav, NavDropdown,Form } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./HomeNav.css"
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { ImMail2 } from "react-icons/im";
import "./Offcanvas.css";

const HomeNav = () => {
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
            <div className="top">

              <Offcanvas.Header closeButton>

                <div className="title">
                  <h3> Henry J</h3>
                </div>

              </Offcanvas.Header>
            </div>

            <Offcanvas.Body className="ofBody">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
              <hr />
              <div className="menu">
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Home">
                        <NavDropdown.Item className="items">
                          <li className="d-items">Derives</li>
                          <li className="d-items">Reports</li>
                          <li className="d-items">Tools</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>

                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="User Detail">
                        <NavDropdown.Item className="items">
                          <li className="d-items">Name</li>
                          <li className="d-items">Address</li>
                          <li className="d-items">Conduct</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Reports">
                        <NavDropdown.Item className="items">
                          <li className="d-items">App report</li>
                          <li className="d-items">Documents</li>
                          <li className="d-items">File Detail</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Alerts">
                        <NavDropdown.Item className="items">
                          <li className="d-items">Derives</li>
                          <li className="d-items">Reports</li>
                          <li className="d-items">Safety</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Messages">
                        <NavDropdown.Item className="items">
                          <li className="d-items">New Messages</li>
                          <li className="d-items">comunication</li>
                          <li className="d-items">search</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>

                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Others">
                        <NavDropdown.Item className="items">
                          <li className="d-items">Derives</li>
                          <li className="d-items">Reports</li>
                          <li className="d-items">Tools</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>

                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown title="Favorits">
                        <NavDropdown.Item className="items">
                          <li className="d-items">Organization</li>
                          <li className="d-items">gathering</li>
                          <li className="d-items">device</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </div>
                </div>
                <div className="drop">
                  <div className="list ">
                    <span className="m-title">
                      <NavDropdown className="ti" title="Comments">
                        <NavDropdown.Item className="items">
                          <li className="d-items">posstives</li>
                          <li className="d-items">negatives</li>
                          <li className="d-items">nutral</li>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </div>
                </div>

              </div>

            </Offcanvas.Body>

          </Offcanvas>

        </div>
        <div className="main">
          <a className="navbar-brand">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/126/447/757/panda-abstract-panda-fantasy-wallpaper-preview.jpg"
              alt=""
              width="50"
              height="40"
              className="logo-img"
            />
          </a>
        </div>
        <Container >
          <Navbar.Brand>
            <h4 className="logo-title">MY_App</h4></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">help</Nav.Link>

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
          <div className="icon felix">

            <Button variant="info" className="sub-icon"><CgProfile /></Button>
            <Button variant="info" className="sub-icon"><ImMail2 /></Button>
            <Button variant="info" className="sub-icon"><AiOutlineLogout /></Button>

          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNav;