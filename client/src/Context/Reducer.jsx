
const reducer = (state,action) =>{
    switch(action.type){
        case'Login_Start':
        return{
            user:null,
            isFetching:true,
            error:false,
        };
        case'Login_Success':
        return{
            user:action.payload,
            isFetching:false,
            error:false,
        };
        case'Login_Failure':
        return{
            user:null,
            isFetching:false,
            error:true,
        };
        case'Logout':
        return{
            user:null,
            isFetching:false,
            error:false,
        };
        case'UPDATE_START':
        return{
            ...state,
            isFetching:true,
        };
        case'UPDATE_SUCCESS':
        return{
            user:action.payload,
            isFetching:false,
            error:false,
        };
        case'UPDATE_FAILURE':
        return{
            user:state.user,
            isFetching:false,
            error:true,
        };
        case'DELETE':
        return{
            user:null,
            isFetching:false,
            error:true,
        };
        default:
            return state;
    }
}

export default reducer;