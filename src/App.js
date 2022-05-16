import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import getAuth from "./getAuth";
  function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    //var { uname, pass } = document.forms[0];
    var username = 'a';
    var password = 'a';
    var session_url = 'http://httpbin.org/basic-auth/'+username+'/'+password;
  
  getAuth(event.target.uname.value,event.target.pass.value,session_url).then(function(response) {
    console.log('Authenticated');
    
  }).catch(function(error) {
    console.log('Error on Authentication');
  })
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  //  inputname=uname.value;
  //  inputpass=pass.value;
    // Compare user info
  const checkuname=(username!== event.target.uname.value);
  const checkpass=(password !== event.target.pass.value);
      if (checkpass) 
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });

     if(checkuname){
      // Username not found
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    if(!checkuname&&!checkpass){
      setIsSubmitted(true);
    }
   ;
  }
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
         
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;