import React from "react";
import BottomBar from "../BottomBar/BottomBar";
import HomeNav from "../HomeNav/HomeNav";
import Carosal from "../Carosal/Carosal";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Paragraph from "../Paragraph/Paragraph";

const Home = () => {
  return (
    <div>
      <div className="navbar row">
        <HomeNav />
      </div>
      <div className="bottom-nav row">
        <BottomBar />
      </div>
      <div className="carasol col-12 md-5">
        <div>
          <div className=" carsal row">
            <Carosal />
          </div>
        </div>
      </div>
      <div className="card col-12">
        <div className="row">
          <div className="col-6">
            <Cards />
          </div>
          <div className="col-6">
            <Paragraph />
          </div>
        </div>
      </div>

      <div className="col-12 Form">
        <div className="row">
          <Form />
        </div>
      </div>
      <div className="footer col-12">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
