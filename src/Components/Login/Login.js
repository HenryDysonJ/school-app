import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [validate, setValidate] = useState(false);

  const [Data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    checkbox: "",
  });
  const handleChange = async (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const signSubmit = (e) => {
    e.preventDefault();
    setValidate(true);
    if (
      Data.Name !== "" &&
      Data.Email !== "" &&
      Data.password !== "" &&
      Data.checkbox !== ""
    ) {
      navigate("/Home");
    }
  };
  return (
    <div className="bg-img">
      <div>
        <div className="Margin">
          <h1 className="Login">Login</h1>
          <Form
            className="sign formClass"
            noValidate
            validated={validate}
            onSubmit={signSubmit}
          >
            <InputGroup hasValidation>
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  User Name
                </InputGroup.Text>
                <FormControl
                  placeholder="UserName"
                  className="mx-3"
                  name="Name"
                  type="Name"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a FirstName.
                </Form.Control.Feedback>
              </div>
            </InputGroup>
            <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Mail ID
                </InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Email"
                  className="mx-3"
                  type="Email"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a name@gmail.com.
                </Form.Control.Feedback>
              </div>
            </InputGroup>
            <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Conform password"
                  type="password"
                  name="password"
                  className="mx-3"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a Password.
                </Form.Control.Feedback>
              </div>
              <InputGroup className="mt-3"></InputGroup>
              <Form.Group className="lable mt-3">
                <FormCheck
                  onChange={handleChange}
                  type="checkbox"
                  label="Agree with sign In"
                  name="checkbox"
                  required
                  className="check"
                />
              </Form.Group>
            </InputGroup>
            <div className="btnAlign">
              <Button className="center" size="lg" variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
