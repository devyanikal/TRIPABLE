import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../App.css';

function ViewPlaces(props){
    const [details, setDetails] = useState([],);
    const [isLoading, setLoading] = useState(true);
    let dict={wu: '',vi: '',si: '',hi: ''};

    useEffect(() =>{
        let data;
        console.log(props.disablity)
        if (props.disablity=="wu"){dict={wu: true,vi: '',si: '',hi: ''}}
        else if (props.disablity=="vi"){dict={wu: '',vi: true,si: '',hi: ''}}
        else if (props.disablity=="si"){dict={wu: '',vi: '',si: true,hi: ''}}
        else if (props.disablity=="hi"){dict={wu: '',vi: '',si: '',hi: true}}
        console.log(dict)
        let url='http://127.0.0.1:8000/explore?city='+props.place+'&wheelchair_user='+dict.wu+'&hearing_impaired='+dict.hi+'&visual_impaired='+dict.vi+'&speech_impaired='+dict.si
        console.log(url)
        axios.get(url)
            .then(res => {
                data=res.data;
                setDetails({
                    details: data
                });
                setLoading(false);
            })
            .catch(err => { })
    },[props.place,props.disablity]);

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


         