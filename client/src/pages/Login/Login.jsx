import './Login.css'
import { Link } from 'react-router-dom'
import { useContext,useRef, useState } from 'react'
import { Context } from '../../Context/Context'
import axios from 'axios'
import { apiurl } from '../../App'
const Login = () => {

  const userref = useRef();
  const passwordRef = useRef();
  const [notfound,setnotfound]=useState(false)
  const {dispatch,isFetching}=useContext(Context)
const handelsubmit =async (e)=>{
e.preventDefault();
dispatch({ type:"Login_Start"});
try{
const res = await axios.post(`${apiurl}auth/login/`,{
  username:userref.current.value,
 password:passwordRef.current.value,
})
dispatch({ type:"Login_Success",payload:res.data});
}catch(err){
  dispatch({ type:"Login_Failure"});
  setnotfound(true)
}
}



  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form onSubmit={handelsubmit} className='loginForm'>
            <label>Username</label>
            <input ref={userref} className='loginInput' required type="text" placeholder='Enter Your Username.....' /><br/>
            <label>Password</label>
            <input  ref={passwordRef} required className='loginInput' type="password" placeholder='Enter Your Password.....' />
            <button type='submit' className='loginButton' disabled={isFetching}>Login</button>
        </form>
        <button className='loginRegisterButton'><Link to={"/Register"} style={{textDecoration:"none"}}> Register </Link></button>
        {notfound && (<span style={{color:'red',marginTop:'30px'}}> User Not Found</span>)}
    </div>
  )
}

export default Login