import React from 'react';
import '../stylesheet/home.css';
import '../stylesheet/commoncss.css';
import Aboutimage from '../images/about.png'
import Aboutcontact from '../images/contact.png'
import { Link } from 'react-router-dom';
const home = () => {
  return (
   
    <div>
     <br/><br/><br/>
     <h2 className='text-center text-whitesmoke'>HTML LEARN IT FROM SCRATCH COURSE!</h2>
     <p className='text-yellow text-center text-medium'>let start with the WEB development</p>
     <div className='homepage'>
     
        <Link to='/about'><img src={Aboutimage} alt='aboutpage' tex style={{width:"20rem" }} /></Link>
        
        <Link to='/contact'><img src={Aboutcontact} alt='contactpage' style={{width:"20rem"}}/></Link>
       
        <Link to='/course'><img src={Aboutimage} alt='coursepage' style={{width:"20rem"}}/></Link>
        
    </div>
    </div>
   
    
  )
}
export default home
