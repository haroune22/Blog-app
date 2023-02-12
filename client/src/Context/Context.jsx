
import { createContext,useReducer,useEffect } from "react"
import reducer from "./Reducer";

const INITIAl_STATE ={
    user:JSON.parse(localStorage.getItem("user")) || null ,
    isFetching:false,
    error:false
}
export const Context = createContext(INITIAl_STATE);
export const ContextProvider = ({children}) =>{
    const [state,dispatch]= useReducer(reducer,INITIAl_STATE);
    useEffect(()=>{
localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return(
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    );
}