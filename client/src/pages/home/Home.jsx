import { useEffect } from "react"
import { useState } from "react"
import Header from "../../Components/header/Header"
import Posts from "../../Components/Posts/Posts"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./Home.css"
import axios from "axios"
import { useLoaderData, useLocation } from "react-router-dom"
import Bottom from "../../Components/Bottombar/bottom"
import { apiurl } from '../../App'



const Home = () => {
  const {search}= useLocation()

  const [postsk,setpostsk] = useState([]);
  const url = `${apiurl}posts/` +search
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get(url)
      const sortedPosts = res.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      });
      setpostsk(sortedPosts)
    }
    
    fetchPosts()
  },[search],1000)
  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={postsk}/>
        <Sidebar/>
    </div>
    <Bottom/>
    </>
    
  )
}

export default Home;