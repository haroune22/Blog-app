import React from 'react'
import { useState } from 'react';
import './Contact.css'
const Contact = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [subject, setSubject] = useState('');
  const [object, setObject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // send the data to the server
    // You can use axios or fetch to make a post request to the server
    // and send the form data as the request body
  };
  const formStyles = {
    width: '500px',
    padding: '20px',
    border: '1px solid #ccc',
    margin: '0 auto',
    textAlign: 'left',
  };

  const labelStyles = {
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const inputStyles = {
    padding: '10px',
    width: '100%',
    marginTop: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };
  const submitStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    marginTop: '20px',
    cursor: 'pointer',
  };
  return (
    <div className='contactpage'>
        <div className='contactform'>
            
<div >
<h1>You Can Reach Us </h1>
<iframe className='img' src="https://maps.google.com/maps?q=Rouiba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</div>
        <div >
        <form onSubmit={handleSubmit} style={{marginTop:'0px',marginLeft:'60px', width: '50%' }}>
        <h1>Contact us</h1><br />
          <div style={{ margin: '10px 0' }}>
            <label htmlFor="email">Email:</label>
            
            <input
              type="email"
              placeholder='Write A Valide Email.....'
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ padding: '5px', width: '200px', }}
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{ padding: '5px', width: '200px' }}
            />
          </div>
          
          <div style={{ margin: '10px 0' }}>
            <label htmlFor="object">Message:</label>
            <input
              type="text"
              id="object"
              value={object}
              onChange={(event) => setObject(event.target.value)}
              style={{ padding: '5px', width: '200px',height:'100px' }}
            />
          </div>
          <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'lightblue' }}>
            SEND
          </button><br /><br />
          <h3>
          You can contact us:</h3> <br />
          <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i><br /><br />
        <span>Phone Number:+2135467394</span><br /><br />
        <span>
        <input type="checkbox" id="terms"/>
        <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
      </span>
        </form>
        </div>
        </div>
        </div>
      );
    
    
}

export default Contact;