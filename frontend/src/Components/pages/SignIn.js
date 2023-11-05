import React from 'react';
import axios from 'axios';
import { useState} from "react";
import { Navigate } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css"
import './SignIn.css'
import Home from './Home';
// import classes from "./LoginForm.module.scss";
// import usernameIcon from "../assets/akar-icons_person.svg";
// import passwordIcon from "../assets/carbon_password.svg";
// import ValidUserContext from "../authCheck";

function SignIn() {

    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [flag, setFlag] = useState('')
    const [error, setError] = useState('')

    function submitLogin(e) {
        e.preventDefault();
        console.log(e)
        var formData = new FormData();
        formData.append("username", username)
        formData.append("password", pw)
        console.log(formData.get("username"))

        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/customer_login_api',
          data: formData,
          headers:{'Content-type': 'multipart/form-data'}
        })
        .then(function (response) {
          console.log(response);
          setFlag(response.data)
          console.log(flag)
        //   if (flag === 'logged in successfully') {
        //     window.location='http://localhost:3000/';
        //   }
          if(response.data.error !== ''){
          setError(response.data.error)}
    
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } } )
        ;   
  
        // props.username=username;
        // props.flag=flag;
        setPw('')
        setUsername('')
      }


  return (
    <div>
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={e => submitLogin(e)}>
        
          {(error === 'Invalid Password' || error==='Invalid Username')?
            (<div class="alert alert-danger" role="alert">
              {error}
            </div>)
          : <div></div>}

            {(flag === 'logged in successfully')?
              <Navigate to='/'/>
          : <div></div> }

         

        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered?{" "}
            <span className="link-primary" >
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              value={username} onChange={e => setUsername(e.target.value)} 
              className="form-control mt-1"
              placeholder="e.g muskansetiya"
            />
          </div>
          {/* <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div> */}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={pw} onChange={e => setPw(e.target.value)} 
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" id='unbutton'>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot password?
          </p>
        </div>
      </form>
      {/* <h1>{flag}</h1> */}
    </div>
    </div>
  )
}

export default SignIn;