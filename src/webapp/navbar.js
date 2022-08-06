import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/app.css';
import logo from '../images/logo.png'

const navbar = () => {
  return (
    
      <div>
    <Link to='/'> <img src={logo} alt='logo' style={{width:'12rem',height:'10rem'}}></img></Link>
     <div className='NavBar2'>
        <ul>  
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>about</li></Link>
        <Link to='/contact'><li>contact</li></Link>
        <Link to='/course'><li>course</li></Link>
        </ul>
        </div>
       
       
    </div>

  )
}

export default navbar
