import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
import { Button, Card } from "react-bootstrap";
import "../Home/Home.css";
import { Carousel } from "react-bootstrap";

const Cards = () => {

    const api = useSelector((state) => state.ReducerComponent);
    let dispatch = useDispatch();
    let datas = api.api;
    console.log(datas, "hero");
    useEffect(() => {
        dispatch(GET_API());
    }, [dispatch]);

    return (
        <div classNameName="cards col-5">
            {
                datas.map((item) => {
                    return (
                        <> <div className="col-12 mx-9 mt-5 flex">
                            <Carousel>
                                <Carousel.Item interval={400}>
                                    <div className=" col-3 container">
                                        <Card style={{ width: "20rem" }} className="cardStyle">
                                            <Card.Img
                                                className="cardIimg mt-2"
                                                variant="top"
                                                src={item.img}
                                            />
                                            <Card.Body>

                                            </Card.Body>
                                        </Card>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <div className=" col-3 container">
                                        <Card style={{ width: "20rem" }} className="cardStyle">
                                            <Card.Img
                                                className="cardIimg mt-2"
                                                variant="top"
                                                src={item.img1}
                                            />
                                            <Card.Body>

                                            </Card.Body>
                                        </Card>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <div className="col-3 container">
                                        <Card style={{ width: "20rem" }} className="cardStyle">
                                            <Card.Img
                                                className="cardIimg mt-2"
                                                variant="top"
                                                src={item.img2}
                                            />
                                            <Card.Body>

                                            </Card.Body>
                                        </Card>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <div className="col-3 container">
                                        <Card style={{ width: "20rem" }} className="cardStyle">
                                            <Card.Img
                                                className="cardIimg mt-2"
                                                variant="top"
                                                src={item.img3}
                                            />
                                            <Card.Body>

                                            </Card.Body>
                                        </Card>

                                    </div>
                                </Carousel.Item>
                            </Carousel>

                        </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Cards;
