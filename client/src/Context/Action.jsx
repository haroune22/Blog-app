export const LoginStart = (userCredentials)=>({
    type:'Login_Start'
});
export const LoginSuccess = (user)=>({
    type:"Login_Success",
    payload:user,
});
export const LoginFailure = ()=>({
    type:"Login_Failure",
});
export const Lougout = ()=>({
    type:"Logout",
});
export const UPDATE_START = (userCredentials)=>({
    type:'UPDATE_START'
});
export const UPDATE_SUCCESS = (user)=>({
    type:"UPDATE_SUCCESS",
    payload:user,
});
export const UPDATE_FAILURE = ()=>({
    type:"UPDATE_FAILURE",
});
export const DeleteUser = ()=>({
    type:"DELETE",
});