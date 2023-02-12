import './Settings.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import axios from 'axios'
import { apiurl } from '../../App'
import Post from '../../Components/post/Post'
import Bottom from '../../Components/Bottombar/bottom'




const Settings = () => {
  const [dark,setdark]=useState(false)
  const [posts,setposts]=useState([])
const [username,setusername] =useState("")
const [email,setemail]= useState("")
const [success,setSuccess]=useState(false)
const [password,setpassword]=useState("")
const [file,setfile]=useState(null);
const sortedPosts = posts.sort((a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
});

const colorchange = ()=>{
  setdark(!dark)
}
useEffect(()=>{
  const fetchposts = async()=>{
    const res = await axios.get(`${apiurl}posts/?user=${user.username}`,)
    setposts(res.data)
    
  }
  fetchposts()
},[])

const hendeldelete=async()=>{
  try{
    await axios.delete(`${apiurl}users/`+user._id,{data:{userId:user._id}})
    window.location.replace("/Register")
   dispatch({ type: "DELETE" });
      }catch(err){
    
      }
}

    const {user,dispatch}= useContext(Context)
    const PF = "http://localhost:4120/Images/"
    const handelsubmit = async (e) =>{
        e.preventDefault();
         dispatch({ type: "UPDATE_START" });
        const  updatedUser = {
          userId:user._id,
          username,
          email,
          password,
        }
        if(file){
          const data = new FormData()
          const filename = Date.now() + file.name;
          data.append("name",filename)
          data.append("file",file)
          updatedUser.profilepic = filename;
          try{
            await axios.post("http://localhost:4120/api/upload/",data)
            console.log(data)
          }catch(err){

          }
        }
          try{
            const res = await axios.put(`${apiurl}users/` +user._id,updatedUser)
             setSuccess(true);
                   dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
       
               }catch{
                 dispatch({ type: "UPDATE_FAILURE" });
               }
        
      }
  return (<>
    
    <div className='settings' style={{backgroundColor: dark ? "black" : "white",}}>
        <div className="settingsWrapper">
    <div className="settingsTitle">
        <span className="span settingsUpdateTitle">Welcome  To Your Account</span>
        <button className="span settingsDeleteTitle" onClick={hendeldelete}>Delete Your Account</button>
    </div>
    <form className='settingsForm' onSubmit={handelsubmit}>
        <h3  style={{color: dark ? "white" : "black",}} >Profile Picture</h3>
        <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilepic} alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}}/>
        </div>
        <label>  Username</label>
        <input required type="text" placeholder={user.username} onChange={e=>setusername(e.target.value)}/>
        <label>  Email</label>
        <input type="text" required placeholder={user.email} name='email' value={email} onChange={e=>setemail(e.target.value)}/>
        <label>  Password</label>
        <input type="password" placeholder='Password' required onChange={e=>setpassword(e.target.value)}/>
        <button className="settingsSubmit" type='submit'>Update</button>
        {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
           
    </form><br /><br />
    <div><br /><br />
    <h3>Fell Free To Edit Your Posts And Profile</h3><br />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi voluptatem autem et facere quos laboriosam repudiandae fugit ut perferendis, nostrum voluptatum cum aspernatur quas sequi culpa veritatis. Magni, dolorum!</p>
   <button onClick={colorchange}>dark</button>
    </div>
   
        </div>
            <Sidebar/>
        </div>
        
        <span className='span-settingsUpdateTitle'>{posts.length}  Posts Created:
           </span><br /><br />
              <div className='posts'>
                {sortedPosts.map(p=>(
            <Post post={p}/>   ))}
              </div>
   <Bottom/>
        </>)
}

export default Settings