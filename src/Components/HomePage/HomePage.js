import React from "react";
import Footer from "../Footer/Footer";
import "./HomePage.css";
import Course from "../Course/Course";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/staff");
  };
  const handleSubmit =()=>{
    navigate("/student")
  }
  return (
    <div className="Home">
      <div className="col-12 d-flex">
        <div className="col-4 card">
          <Course />
        </div>
        <div className="col-4 card">
          <h1>Staff Page</h1>
          <hr />
          <div>
            <img src="https://cdn.pixabay.com/photo/2015/03/03/07/29/staff-657056_960_720.jpg" height="110" width="400"/>
          </div>
          <div className="button">
          <Button onClick={handleClick} className="button">Go Staff page</Button>
          </div>
        </div>
        <div className="col-4 card">
        <h1>Student Page</h1>
          <hr />
          <div>
            <img src="https://www.kiddiematters.com/wp-content/uploads/2017/03/Depositphotos_61894645_original-1024x708.jpg" height="110" width="400"/>
          </div>
          <div className="button">
          <Button onClick={handleSubmit} className="button">Go Student page</Button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
