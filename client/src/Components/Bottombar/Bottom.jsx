import './bottom.css'

import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='bottom'>
    <div className='bottombar'>
        <ul className='bottomlist'>
            <li className='li'>DEVOLOPERS
                
            </li ><div className='conatct'>
            <li className='li'>
                Create Content
                
            </li><br />
            </div>
            <li className='li'>
            Privacy And Policy
            </li>
            <li className='li'>
            Help Center
            </li>
        </ul>
    </div >
    <div className='bottombar'>
        <ul className='bottomlist'>
            
            
            <li className='li'>
            COMMUNITY
            </li>
            <li className='li'>
            Developers
            </li>
            <li className='li'><Link to={'/Home'} style={{textDecoration:"none"}}>Status page</Link>
            
            </li>
        </ul>
    </div>
    <div className='bottombar'>
        <ul className='bottomlist'>
            <li className='li'><Link to={"/About"} style={{textDecoration:"none"}}>About Us</Link>
                
            </li ><div className='conatct'>
            <li className='li'>
                Conatct Us 
                
            </li>
            <div className='topLeft'> 
            <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
           
        </ul>
    </div >
    </div>
  )
}

export default Bottom