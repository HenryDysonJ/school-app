import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./BottomBar.css";

const BottomBar = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Fire Sales</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div className="bottom">
                                <div className="dropdown">
                                    <li className="b-text dropbtn">Feuture
                                        <div className="feature row">
                                        <div className="dropdown-content col-2">
                                            <a className="" href="#">Drawing</a>
                                            <a className="" href="#">Vector</a>
                                            <a className="" href="#">Action</a>
                                            <a className="" href="#">Bussines</a>
                                        </div>
                                       </div>
                                    </li>
                                </div>
                                <div className="dropdown">
                                <li className="b-text">About
                                <div className="feature row">
                                        <div className="dropdown-content col-2">
                                            <a className="" href="#">Company</a>
                                            <a className="" href="#">Managing</a>
                                            <a className="" href="#">Acunting</a>
                                            <a className="" href="#">Help</a>
                                        </div>
                                       </div>
                                </li>

                                </div>
                                <div className="dropdown">
                                <li className="b-text">Service
                                <div className="feature row">
                                        <div className="dropdown-content col-2">
                                            <a className="" href="#">Achivers</a>
                                            <a className="" href="#">cart 2 cart</a>
                                            <a className="" href="#">worshops</a>
                                            <a className="" href="#">Demo</a>
                                        </div>
                                       </div>
                                </li>

                                </div>
                                <div className="dropdown">
                                <li className="b-text">Galary
                                <div className="feature row">
                                        <div className="dropdown-content col-2">
                                            <a className="" href="#">Designs</a>
                                            <a className="" href="#">verity</a>
                                            <a className="" href="#">Madel</a>
                                        </div>
                                       </div>
                                </li>

                                </div>
                                <div className="dropdown">
                                <li className="b-text">Conduct us
                                <div className="feature row">
                                        <div className="dropdown-content col-2">
                                            <a className="" href="#">Linkedin</a>
                                            <a className="" href="#">Face Book</a>
                                            <a className="" href="#">Tiwiter</a>
                                        </div>
                                       </div>
                                </li>

                                </div>
                                
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default BottomBar;