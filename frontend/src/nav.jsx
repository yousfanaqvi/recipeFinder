import React from 'react'
import "./index.css"
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
function Nav() {
    let navigate=useNavigate();
  return (
    
    <header className='header'>
       <button className='home-button' onClick={()=>{navigate("/")}}><HomeIcon /></button>
       <h2 onClick={()=>{navigate("/")}}>Recipe Finder</h2>
    </header>
    )
}

export default Nav