import React from 'react';
import '../stylesheet/contact.css';
import '../stylesheet/commoncss.css';

const contact = () => {
  return (
    
     <div className='contactclass '>
      <div className='dislpay-if width-100' style={{marginBottom:"4px"}}>
      <iframe width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vijayawada+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/wearable-gps/">adventure gps</a>
            </iframe>
            </div>
       <div className='width-100'>
        <form className='text-yellow '>
          Name:<br/><input type='text'></input><br/>
          Surname:<br/><input type='text'></input><br/>
          Age:<br/><input type='text'></input><br/>
          Gender:<br/>
          Male<input type='radio'></input>
          Female<input type='radio'></input><br/>
          Phone:<br/><input type='tel'></input><br/>
          Select a question:<br/><select>
            <option >What is your birth place</option>
            <option >What is your first dog name</option>
            <option >What is your phone number</option>
            </select><br/>
          Write your answer:
          <br/><textarea name="getquestionans" placeholder="300 words" style={{height: "100px", width:"300px"}}></textarea>
          <br/><input type='submit'style={{backgroundColor:"yellow",color:"black"}}></input>
          <input type='reset'style={{backgroundColor:"yellow",color:"black"}}></input>
        </form>
     </div>
    </div>
    

  )
}

export default contact