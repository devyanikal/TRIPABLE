import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../App.css';
import flower from './flower.jpg';

function ViewPlaces(){
    const [details, setDetails] = useState([],);
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        let data;
        axios.get('http://127.0.0.1:8000/explore/')
        .then(res => {
            data=res.data;
            setDetails({
                details: data
            });
            setLoading(false);
        })
        .catch(err => { })
    },[]);

    if (isLoading) {
        return (
          <div>
          <h2>loading....</h2>
        </div>
        )
      } else {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-9"><h1>EXPLORE PLACES PAGE</h1></div>
                    <div class="col-2">
                    <label for="places"><h5>Choose a filter:</h5></label>
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="places" id="places" >
                        <option value="allinfo">ALL</option>
                            <option value="wheelchair">Wheelchair user</option>
                            <option value="vision">Visual Impaired</option>
                            <option value="hearing">Hearing Impaired </option>
                            <option value="speech">Speech Impaired</option>
                        </select>  
                    </div>
                        <div class="col-8">
                            {details.details.map((output,id) => (
                            <div key={id}>
                                <h3>{output.place_name}</h3>
                                <p><img src={output.image} width="300" height="200"></img></p>
                                <p>{output.About}</p>
                                <p>{output.location}</p>
                                <p><h6>Facilities: </h6>{output.facility}</p>
                                <hr></hr>
                            </div>
                        ))}          
                    </div>
                </div>
            </div>

    )}
  }

export default ViewPlaces;


         