import axios from "axios";

export const ActionType ={
    GET_API :"GET_API"
}

export const GET_API =()=>{
    return async (dispatch)=>{
        await axios
        .get("http://localhost:3006/Data")
        .then((res)=>{
            console.log("api_res==>",res.data)
            dispatch({
                type:ActionType.GET_API,
                data:res.data
              })
        })
        .catch((error)=>{
            console.log("error from api",error)
        })
    }
}