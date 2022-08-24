import React from "react";

import "./Footer.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { Form, Button } from "react-bootstrap";

const Footer = () => {
   
    return (
        <div>
            <div className="footer">
                <div className="row">
                    <div className="col-8 top-menu">
                        <div className="header2">
                            <ul className="menu2">
                                <li>About us</li>
                                <li>Get in touch</li>
                                <li>Projects</li>
                                <li>Subscribe</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 icon">
                        <div>
                            <span className="footer-icons">
                                <BsFacebook />{" "}
                            </span>
                            <span className="footer-icons">
                                {" "}
                                <AiFillInstagram />
                            </span>
                            <span className="footer-icons">
                                {" "}
                                <FaTwitter />
                            </span>
                            <span className="footer-icons">
                                {" "}
                                <BsLinkedin />{" "}
                            </span>
                        </div>
                        <div className="subaribe">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="subscribe"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-info"><BsTelegram /></Button>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;