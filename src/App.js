import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Carosal from "./Components/Carosal/Carosal";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Cards" element={<Cards/>}/>
            <Route path="/Caros" element={<Carosal/>}/>
            <Route path="/f" element={<Form/>}/>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
