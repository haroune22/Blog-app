import "./Sidebar.css"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { apiurl } from "../../App"

const sidebar = () => {
const [Cats,setCats]=useState([])
useEffect(()=>{
    const fethcats = async ()=>{
        const res = await axios.get(`${apiurl}Categories/`)
        setCats(res.data)
    }
    fethcats()
},[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarimg1" src="ben-kolde-FaPxZ88yZrw-unsplash.jpg" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quidem doloribus, harum eaque incidunt laboriosam </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">RECENT CATEGORIES </span>
        <ul className="sidebarList">
            {Cats.slice(0,6).map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                 <li className="sidebarListItem">
                {c.name}
            </li></Link>
            ))}
                    </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
               FOLLOW US 
            </span>
            <div className="sidebarSocial">
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