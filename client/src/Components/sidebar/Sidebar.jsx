import "./Sidebar.css"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { apiurl } from "../../App"

const sidebar = (props) => {
const [Cats,setCats]=useState([])
useEffect(()=>{
    const fethcats = async ()=>{
        const res = await axios.get(`${apiurl}Categories/`)
        setCats(res.data)
    }
    fethcats()
},[])

  return (
    <div className="sidebar"style={{backgroundColor:props.dark ? "rgb(25, 23, 23)":"white"}}>
        <div className="sidebarItem">
            <span className="sidebarTitle" style={{color:props.dark ? "white":"rgb(25, 23, 23)"}}>ABOUT ME</span>
            <img className="sidebarimg1" src="ben-kolde-FaPxZ88yZrw-unsplash.jpg" alt="" />
            <p  style={{color:props.dark ? "white":"rgb(25, 23, 23)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quidem doloribus, harum eaque incidunt laboriosam </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"  style={{color:props.dark ? "white":"rgb(25, 23, 23)"}}>RECENT CATEGORIES </span>
        <ul className="sidebarList">
            {Cats.slice(0,6).map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                 <li  style={{color:props.dark ? "white":"rgb(25, 23, 23)"}} className="sidebarListItem">
                {c.name}
            </li></Link>
            ))}
                    </ul>
        </div>
        <div className="sidebarItem">
            <span  style={{color:props.dark ? "white":"rgb(25, 23, 23)"}} className="sidebarTitle">
               FOLLOW US 
            </span>
            <div  style={{color:props.dark ? "white":"rgb(25, 23, 23)"}} className="sidebarSocial">
            <i className="sidebaricon fa-brands fa-square-facebook"></i>
        <i className="sidebaricon fa-brands fa-square-twitter"></i>
        <i className="sidebaricon fa-brands fa-square-pinterest"></i>
        <i className="sidebaricon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default sidebar