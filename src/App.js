import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Course from "./Components/Course/Course";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import LogNavs from "./Components/LogNavs/LogNavs";
import Staff from "./Components/Staff/Staff";
import Student from "./Components/Student/Student";

function App() {
  return (
    <div className="App">
      <LogNavs />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/course" element={<Course />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
