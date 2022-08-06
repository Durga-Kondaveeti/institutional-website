import React from 'react';
import Home from './webapp/home';
import About from './webapp/about';
import Course from './webapp/course';
import Contact from './webapp/contact';
import Navbar from './webapp/navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import twitter from './images/tw.png';
import facebook from './images/fb.png';
import instagram from './images/ig.png';

const App = () => {
  return (  
<div>
        <BrowserRouter>
        <Navbar/>
          <Switch >
          <Route path="/"  exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/course" exact component={Course}></Route>       
        </Switch>
        </BrowserRouter>

        <div className='Footer'>
       <a href="https://www.twitter.com"> 
        <img src={twitter} alt="twitter" ></img>
       </a>
       <a href="https://www.facebook.com"> 
        <img src={facebook} alt="facebook" ></img>
       </a>
       <a href="https://www.instagram.com"> 
        <img src={instagram} alt="instagram" ></img>
        </a>

         <p style={{color:"whitesmoke"}}>COPYRIGHT © 
         <a href="mailto:durgashanakrkondaveeti@gmail.com" style={{color:"whitesmoke",textDecoration:'none'}} >
          MASTERPIECE ©</a>
          </p>
        </div>
</div>   
  );
}

export default App
