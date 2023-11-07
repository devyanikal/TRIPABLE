
import './format.css'
import React from 'react';
import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import CardTemplate from './Card';
import { Grid, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';

function ViewHotels(){
  const [value, setValue] = useState("");
  const [disablity, setDisability] = useState("");
    const [details, setDetails] = useState([],);
    const [isLoading, setLoading] = useState(true);
    const inputRef = useRef(null);
    const [flag,setFlag]=useState(0);
    const [searched, setSearched] = useState('');


    let dict={wu: '',vi: '',si: '',hi: ''};

    useEffect(() =>{
        let data;
        console.log(disablity)
        if (disablity=="wu"){dict={wu: true,vi: '',si: '',hi: ''}}
        else if (disablity=="vi"){dict={wu: '',vi: true,si: '',hi: ''}}
        else if (disablity=="si"){dict={wu: '',vi: '',si: true,hi: ''}}
        else if (disablity=="hi"){dict={wu: '',vi: '',si: '',hi: true}}
        console.log(dict)
        
        let url='http://127.0.0.1:7000/api/stripe/hotels?city='+value+'&wheelchair_user='+dict.wu+'&hearing_impaired='+dict.hi+'&visual_impaired='+dict.vi+'&speech_impaired='+dict.si
        console.log(url)
        console.log(searched)
        if(flag==1){
          url='http://127.0.0.1:7000/api/stripe/hotels?search='+searched;
          setFlag(0);
        }
        axios.get(url)
            .then(res => {
                data=res.data;
                setDetails({
                    details: data
                });
                setLoading(false);
            })
            .catch(err => { })
    },[value,disablity,searched]);

    if (isLoading) {
        return (
          <div>
          <h2>loading....</h2>
        </div>
        )
      } else {
    
        return (
            <div>
              
<Grid container spacing={2}>


<div className="destination-list">
{/* style={{marginLeft: 10 + 'em'}} */}

<div className='places'>
<Grid container spacing={2}>
<div class="input-group">
              <input type="search" id="search" name="search" ref={inputRef} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" class="btn btn-outline-primary" style={{maxHeight: 37 + 'px'}} onClick={()=>{setSearched(inputRef.current.value);setFlag(1)}}>search</button>
              <h2 style={{visibility: 'hidden'}}>{searched}</h2> 
            </div>
    <Grid item xs={4}>
          <h5>Choose city:</h5>
            <select id="places" value={value} onChange={(event)=>{setValue(event.target.value)}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
              <option value="">ALL</option>
              <option value="Manali">Manali</option>
              <option value="Udaipur">Udaipur</option>
            </select>
            </Grid>
            <Grid item xs={4}>
              <h5>Choose Aids:</h5>
            <select onChange={(event)=>{setDisability(event.target.value)}}  id="colours">
            <option value="">ALL</option>
              <option value="wu">Wheelchair user</option>
              <option value="vi">Visually Impaired</option>
              <option value="hi">Hearing Impaired</option>
              <option value="si">Speech Impaired</option>
            </select>
            <h3 style={{visibility: 'hidden'}}>{disablity}</h3>
            {console.log(disablity)}
            </Grid>
            </Grid>
        
        </div>

      <Grid container item spacing={3}>
        {details.details.map((hotel, id) => (
            <div key={id}> {console.log(hotel.image)}
            {console.log(hotel)}
            <Link to={`/hotels/${hotel.id}`} className={"link"} style={{textDecoration: 'none'}} >
          <CardTemplate key={id} image={hotel.image} name={hotel.name} description={hotel.landmark+", "+hotel.city+", "+hotel.state+", "+hotel.country+", "+hotel.pincode}/>
          </Link>
          </div>
        ))}
        </Grid>
        
      </div>
      </Grid>
            </div>      
    )}

  }

export default ViewHotels;
