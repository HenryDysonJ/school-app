import axios from "axios";

export const ActionType = {
  GET_COURSEAPI: "GET_COURSEAPI",
  GET_STAFFAPI: "GET_STAFFAPI",
  GET_STUDENTAPI: "GET_STUDENTAPI",
};

export const GET_COURSEAPI = () => {
  return async (dispatch) => {
    await axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/course")
      .then((res) => {
        console.log("course_res==>", res.data);
        dispatch({
          type: ActionType.GET_COURSEAPI,
          data: res.data,
        });
      })
      .catch((error) => {
        console.log("error from course", error);
      });
  };
};
export const GET_STAFFAPI = () => {
  return async (dispatch) => {
    await axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
      .then((res) => {
        console.log("staff api==>", res.data);
        dispatch({
          type: ActionType.GET_STAFFAPI,
          data: res.data,
        });
      })
      .catch((error) => {
        console.log("error from course", error);
      });
  };
};
export const GET_STUDENTAPI = () => {
  return async (dispatch) => {
    await axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/student")
      .then((res) => {
        console.log("student==>", res.data);
        dispatch({
          type: ActionType.GET_STUDENTAPI,
          data: res.data,
        });
      })
      .catch((error) => {
        console.log("error from course", error);
      });
  };
};
