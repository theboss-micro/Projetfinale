import axios from "axios"
import { GET_VET,VET_REGISTER,
    VET_REGISTER_FAILED,
    VET_REGISTER_SUCCESS } from "../Constants/ActionType"


export const getVeto = () => (dispatch) => {
    axios.get("http://localhost:7000/VeterinaireProfile/GET")
        .then(res => dispatch({ type: GET_VET, payload: res.data }))
        .catch(err => console.log(err))
}


/*********************veterinaire registre */

export const registerVeto = (newVeterinaireProfile)=> async (dispatch) =>{
    dispatch({type:VET_REGISTER})
    try {
        const res = await axios.post("http://localhost:7000/VeterinaireProfile/register" , newVeterinaireProfile)
        dispatch({type: VET_REGISTER_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type:VET_REGISTER_FAILED, payload:error.response.data})
    }
}

//update profile

export const updateProfile=(id,editUser)=>(dispatch)=>
{
   axios.put(`http://localhost:7000/VeterinaireProfile/${id}`,editUser)
try{
    dispatch(()=>getVeto())
}
catch(error)
{
    console.log(error)
}
}