import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_STUDENTAPI } from "../Redux/ActionType";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FcCamera } from "react-icons/fc";
import "./Student.css";

const Student = () => {
  const student = useSelector((state) => state.ReducerComponent);
  console.log(student, "student===>");
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_STUDENTAPI());
  }, [dispatch]);
  return (
    <div className="col-12 md-5 staff">
      <h1>Student Details</h1>
      <hr />
      <div className="row sm-6 col-12">
        <div className="col-12 sm-6 ">
          <div className="row">
            {student.student?.map((item) => {
              console.log(item.coursename, "student res");
              return (
                <div className="col-3 md-3 flex">
                  <Card style={{ width: "20rem" }}>
                    <form action="/action_page.php">
                      <span className="upload">
                        <FcCamera />
                      </span>
                      <Form.Control aria-label="name" type="file" id="myFilr" />
                    </form>
                    <Card.Body>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.name}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.email}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Blood group</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.bloodgroup}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>DOB</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.dob}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Father Name</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.fathername}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Mother Name</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.mothername}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Address</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.address}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Course</InputGroup.Text>
                        <select
                          className="form-select form-select-md mb-6"
                          aria-label=".form-select-md example "
                        >
                          <option selected>Select course</option>
                          <option value="1">{item.coursename}</option>
                        </select>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Staff Name</InputGroup.Text>
                        <Form.Control
                          aria-label="name"
                          placeholder={item.staff}
                        />
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

export default Student;
