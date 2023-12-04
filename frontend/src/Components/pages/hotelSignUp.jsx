import React from 'react';
import axios from 'axios';
import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './login.css'

function HotelSignUp(){
    const [hotel_name, setHotel_name] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [cpw, setCpw] = useState('')
    const [error, setError] = useState('')

    
    function submitLogin(e) {
        e.preventDefault();
        console.log(e)
        var formData = new FormData();
        formData.append("hotel_name", hotel_name )
        formData.append("email",email)
        formData.append("username", username)
        formData.append("password", pw)
        formData.append("cpassword", cpw)
        console.log(formData.get("username"))

        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/add_hotel_api',
          data: formData,
          headers:{'Content-type': 'multipart/form-data'}
        })
        .then(function (response) {
          console.log(response);

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
  
        setPw('')
        setCpw('')
        setUsername('')
        setEmail('')
        setError('')
        setHotel_name('')
      }

      return(
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={e => submitLogin(e)}>
        
                {(error !== '')?
                    (<div class="alert alert-danger" role="alert">
                    {error}
                    </div>)
                : <div></div> }

         

                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div className="text-center">
                    Already Registered?{" "}
                    <span className="link-primary" >
                    Sign In
                    </span>
                </div>

                <div className="form-group mt-3">
                    <label>Hotel Name</label>
                    <input
                    type="text"
                    value={hotel_name} onChange={e => setHotel_name(e.target.value)} 
                    className="form-control mt-1"
                    placeholder=""
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    value = {email} onChange={e => setEmail(e.target.value)} 
                    className="form-control mt-1"
                    placeholder="Email Address"
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                    type="text"
                    value={username} onChange={e => setUsername(e.target.value)} 
                    className="form-control mt-1"
                    placeholder="e.g muskansetiya"
                    />
                </div>

                
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    value={pw} onChange={e => setPw(e.target.value)} 
                    className="form-control mt-1"
                    placeholder="Password"
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    value={cpw} onChange={e => setCpw(e.target.value)} 
                    className="form-control mt-1"
                    placeholder="Password"
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    Forgot password?
                </p>
        </div>
      </form>
    </div>
        </div>
      )

}


export default HotelSignUp;