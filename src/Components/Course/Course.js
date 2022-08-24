import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_COURSEAPI } from "../Redux/ActionType";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Course.css";

const Course = () => {
  const course = useSelector((state) => state.ReducerComponent);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_COURSEAPI());
  }, [dispatch]);
  return (
    <div>
      <div className="course">
        <h1>Courses</h1>
        <hr />
        <div className="wrapper-scroll-y my-custom-scrollbar">
          {course.course?.map((item, index) => {
            return (
              <tr className="table table-bordered table-striped mb-0">
                <th key={index}>
                  <InputGroup className="mb-3 lable">
                    <InputGroup.Text>course</InputGroup.Text>
                    <Form.Control
                      aria-label="name"
                      placeholder={item.coursename}
                    />
                  </InputGroup>
                </th>

                <select
                  className="form-select form-select-md mb-6"
                  aria-label=".form-select-md example "
                >
                  <option selected>Staff Names</option>
                 {/* {
                  item.staffName?.map((lab,index)=>{
                    let rescour = course.map(obj=> obj.staffName[0]);
                    console.log(rescour,"resscourr")
                    console.log("lab===>",lab)
                    return(
                      <option value="1">{lab.label}</option>
                    )
                  })
                } */}
                  {/* {
                  item.staffName?.map((nam,index)=>{
                    console.log("nam===>",nam)
                    return(
                      <option value="1">{nam.name}</option>
                    )
                  })
                }
                 {
                  item.staffName?.map((val,index)=>{
                    console.log("lab===>",val)
                    return(
                      <option value="1">{val.value}</option>

                    )
                  })
                }
                  {
                    item.staffName?.map((data,index)=>{
                      console.log(data,"couuurrrssee")
                      return(
                        <option value="1">{data}</option>
                       
                      )
                    })
                  } */}
                </select>
              </tr>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
