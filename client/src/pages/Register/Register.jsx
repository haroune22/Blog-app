import './Register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { apiurl } from '../../App'

const Register = () => {
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const[err,seterr]=useState(false)
  const[errr,seterrr]=useState(false)
  const handelsubmit = async (e)=>{
    e.preventDefault();
    seterr(false)
    if(!validateEmail(email)){
      seterrr(true)
   }else{
    seterrr(false)
    try{
      const res = await axios.post(`${apiurl}auth/Register`,{
        username,email,password,
      })
      res.data && window.location.replace("/login")
    }catch(err){
seterr(true)
    }
    }
  }
  return ( 
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handelsubmit}>
        <label>Username</label>
            <input className='registerInput' type="text" required={true} placeholder='Enter Your Username.....'  onChange={e=>setusername(e.target.value)} /><br/>
            <label>Email</label>
            <input className='registerInput' value={email} type="text" name='email' required={true} placeholder='Enter Your Email.....' onChange={e=>setemail(e.target.value)} />
            {errr && (<span style={{color:"red",marginTop:"10px"}}>Email Invalid</span>)}
            <br/>
            <label>Password</label>
            <input className='registerInput' type="password" required={true} placeholder='Enter Your Password.....' 
            onChange={e=>setpassword(e.target.value)}/>
            <button className='registerButton' type='submit'>Register</button>
        </form>
        <button className='registerLoginButton'><Link to={"/Login"} style={{textDecoration:"none"}}> Login </Link></button>
        <p>&copy; 2022-2023</p>
        {err && <span style={{color:"red",marginTop:"15px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register;