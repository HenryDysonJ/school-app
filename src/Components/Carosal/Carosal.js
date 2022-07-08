import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const api = useSelector((state) => state.ReducerComponent);
  let dispatch = useDispatch();
  let datas = api.api;
  console.log(datas, "hero");
  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      {datas &&
        datas.map((item) => {
          console.log("itemmm", item);
          return (
            <>

              <Carousel>
                <Carousel.Item interval={400}>
                  <div className=" col-12 pic-ctn  ">
                    <img
                      src={item.image1}
                      alt=""
                      height="400px"
                      width="1340px"
                      className=""
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={400}>
                  <div className=" col-12 pic-ctn  ">
                    <img
                      src={item.image2}
                      alt=""
                      height="400px"
                      width="1340px"
                      className=""
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={400}>
                  <div className=" col-12 pic-ctn  ">
                    <img
                      src={item.image3}
                      alt=""
                      height="400px"
                      width="1340px"
                      className=""
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </>
          );
        })}
    </div>
  );
};

export default Hero;