import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_STAFFAPI } from "../Redux/ActionType";
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Staff.css";

const Staff = () => {
  const staff = useSelector((state) => state.ReducerComponent);
  console.log(staff, "staff===>");
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_STAFFAPI());
  }, [dispatch]);
  return (
    <div className="col-12 md-5 staff">
      <h1>STAFF PROFILE</h1>
      <hr />
      <div className="row sm-6 col-12">
        <div className="col-12 sm-6 ">
          <div className="row">
            {staff.staff?.map((item) => {
              console.log(staff, "stafff res");
              return (
                <div className="col-3 md-3 flex">
                  <Card style={{ width: "20rem" }}>
                    <Card.Img
                      className="cardIimg"
                      variant="top"
                      src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                    />
                    <Card.Body>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control aria-label="name"  placeholder={item.name} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control aria-label="name"  placeholder={item.email} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Mobile</InputGroup.Text>
                        <Form.Control aria-label="name"  placeholder={item.mobile} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>DOB</InputGroup.Text>
                        <Form.Control aria-label="name"  placeholder={item.dob} />
                      </InputGroup>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
