import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../App.css';

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
            <div>
                <h1>EXPLORE PLACES PAGE</h1>
                {console.log(details)} 
                {details.details.map((output,id) => (
                    <div key={id}>
                        <h3>{output.place_name}</h3>
                    </div>
                ))}
            </div>      
    )}









    // console.log(details)

    // return(
    //     <div>
    //         <h1>EXPLORE PLACES PAGE</h1>
    //         {console.log(details)} 
    //         {details.details.map((output,id) => (
    //             <div key={id}>
    //                 {console.log(output.place_name)}
    //             </div>
    //         ))}
    //     </div>
    // );
  }

export default ViewPlaces;
