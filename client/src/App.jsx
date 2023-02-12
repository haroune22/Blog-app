

import './App.css'
import Topbar from './Components/Topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Settings from './pages/Settings/Settings'
import Single from './pages/Single/Single'
import Write from './pages/Write/Write'
import {BrowserRouter as Router,
Routes,
Route,
Link
}from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './Context/Context'
import About from './pages/About/About'
export const apiurl ="http://localhost:4120/api/"

function App() {
const {user} = useContext(Context)

  return (
    <Router>
    <Topbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
    <Route path="/Register" element={user ? <Home/> : <Register />}/>
        <Route path="/Login" element={user ? <Home/> : <Login />}/>
        <Route path="/Write" element={user ? <Write/> : <Register />}/>
        <Route path="/Settings" element={user ? <Settings/> : <Register/>}/>
    <Route path='/post/:postId' element={<Single/>}/>
    </Routes>
    
    </Router>
    
  )
}

export default App
