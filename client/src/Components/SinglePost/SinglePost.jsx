import { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import  './SinglePost.css'
import axios from "axios"
import { useState } from 'react'
import { Context } from '../../Context/Context'
import { apiurl } from "../../App"
import ReactQuill from 'react-quill'

const SinglePost = () => {
  const [title,settitle]=useState("")
  const [discription,setdiscription]=useState("")
  const [updateMode,setupdateMode]=useState(false)

  
  
  const PF = "http://localhost:4120/Images/"
  const location = useLocation()
const path = location.pathname.split("/")[2];
const [post,setpost]=useState({})
useEffect(()=>{
const fetchpost = async()=>{
  const res = await  axios.get(`${apiurl}posts/` + path)
  setpost(res.data)
  settitle(res.data.title)
  setdiscription(res.data.discreption)
}
fetchpost()
},[path])
const {user}=useContext(Context)
const handelupdate= async()=>{
  try{
    await axios.put(`${apiurl}posts/`+path,
    {username:user.username , title:title,discreption:discription.replace(/<[^>]+>/g, '')})
   setupdateMode(false)
      }catch(err){
    
      }
}

const handelDelete = async()=>{
  try{
await axios.delete(`${apiurl}posts/`+path,{data:{username:user.username}})
window.location.replace("/")
  }catch(err){

  }
}


  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
          {post.photo && (
            <img className='singlePostImg' src={PF + post.photo} alt="" />
          )}
          {
            updateMode ?<input type='text' className='singlePostTitleinput' autoFocus={true} value={title} onChange={(e)=>settitle(e.target.value)}/>:(
              <h1 className='singlePostTitle'>{title}
              {post.username === user?.username && 
              
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={(e)=>setupdateMode(true)}></i>
              <i className="singlePostIcon 
              fa-solid fa-trash-can" onClick={handelDelete}></i>  
              </div>
              }
              </h1>
            )
          }
          
         
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author:
            <Link to={`/?user=${post.username}`} className="link">
            {post.username}</Link></span>
            <span className='singlePostDate'> {new Date(post.createdAt).toDateString()}</span>
          </div>
          {
            updateMode ?<ReactQuill className='singlePostDescinput' value={discription}  onChange={(value) => setdiscription(value)}/>:(
              <p className='singlePostDesc'>{discription}</p>
              
            )
          }
          {updateMode && 
          <button className="singleButton" onClick={handelupdate}>Update</button>
          }
        </div>
    </div>
  )
}

export default SinglePost