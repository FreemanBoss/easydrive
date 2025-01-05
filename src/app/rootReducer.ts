import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice';  


const rootReducer = combineReducers({
    auth: authReducer,
    
    
});


export default rootReducer;