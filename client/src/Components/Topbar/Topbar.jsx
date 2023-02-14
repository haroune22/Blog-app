import "./Topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../Context/Context"

const Topbar = () => {

  const PF = "http://localhost:4120/Images/"
  const {user,dispatch}=useContext(Context);
  const handellougout=()=>{
    dispatch({type:"Logout"})
  }
  return (
    <div className='top'>
        <div className="topLeft"><i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to={"/"} style={{textDecoration:"none"}}>HOME</Link></li>
                <li className="topListItem"><Link to={"/About"} style={{textDecoration:"none"}}>ABOUT</Link></li>
                <li className="topListItem"><Link to={"/Contact"} style={{textDecoration:"none"}}>CONTACT</Link></li>
                <li className="topListItem"><Link to={"/Write"} style={{textDecoration:"none"}}>WRITE</Link></li>
                <li className="topListItem"><Link to={"/Login"} onClick={handellougout} style={{textDecoration:"none"}}>{user && "LOGOUT"}</Link></li>
            </ul>
            </div>
        <div className="topRight">
        
        {user ? (
          <Link to="/Settings">
             <img className="topImg"
            src={PF+user.profilepic}
            alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/Login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
          
        </div>
    </div>
  )
}

export default Topbar