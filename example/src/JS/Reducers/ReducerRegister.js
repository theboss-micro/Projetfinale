import { GET_VET, VET_REGISTER, VET_REGISTER_FAILED, VET_REGISTER_SUCCESS, USER_DELETE,
    USER_DELETE_FAILED,
    USER_DELETE_SUCCESS,
    GET_PROFILE,
    GET_PROFILE_FAILED,
    GET_PROFILE_SUCCESS, } from "../Constants/ActionType"


const initialState ={
   loading :false, 
   listVeto:[]
}

const ReducerRegister = (state=initialState, action ) =>{
    switch (action.type){
        case USER_DELETE :
        case VET_REGISTER:
     case GET_PROFILE:
            return {...state, loading:true}
        case VET_REGISTER_SUCCESS:
            
            return{...state, loading:false, msg:action.payload}  
            case GET_PROFILE_SUCCESS:
                return { ...state, loading: false, user: action.payload, isAuth: true } 
          case USER_DELETE_SUCCESS:  
            const vcopy = [...state.listVeto]
            const index = vcopy.findIndex(v=>v._id===action.payload.user._id)
            vcopy.splice(index,1)
            return{...state, loading:false, listVeto:vcopy}
        case USER_DELETE_FAILED:
        case VET_REGISTER_FAILED:
        case GET_PROFILE_FAILED:
            return{...state, isAuth:false,loading:false, Error:action.payload} 
                
        
        case GET_VET:
            return {...state, listVeto:action.payload}
        
        default:
            return state
    }
}
export default ReducerRegister