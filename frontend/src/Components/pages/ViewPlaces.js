import React from 'react';
import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import CardTemplate from './Card';
import { Grid, Hidden } from '@mui/material';

function ViewPlaces(){
  //let info={}
  const [value, setValue] = useState("");
  const [disablity, setDisability] = useState("");
  const [details, setDetails] = useState([],);
  const [isLoading, setLoading] = useState(true);
  const [searched, setSearched] = useState('');
	const inputRef = useRef(null);

    let dict={wu: '',vi: '',si: '',hi: ''};
    useEffect(() =>{
        let data;
        console.log(disablity)
        if (disablity=="wu"){dict={wu: true,vi: '',si: '',hi: ''}}
        else if (disablity=="vi"){dict={wu: '',vi: true,si: '',hi: ''}}
        else if (disablity=="si"){dict={wu: '',vi: '',si: true,hi: ''}}
        else if (disablity=="hi"){dict={wu: '',vi: '',si: '',hi: true}}
        console.log(dict)
        //let url='http://127.0.0.1:8000/explore'
        let url='http://127.0.0.1:8000/explore?city='+value+'&wheelchair_user='+dict.wu+'&hearing_impaired='+dict.hi+'&visual_impaired='+dict.vi+'&speech_impaired='+dict.si
        if (searched && !value && !disablity){
          url='http://127.0.0.1:8000/explore?search='+searched
        }
        // else{
        //   url='http://127.0.0.1:8000/explore?city='+value+'&wheelchair_user='+dict.wu+'&hearing_impaired='+dict.hi+'&visual_impaired='+dict.vi+'&speech_impaired='+dict.si
        // }
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

<div style={{marginLeft: 10 + 'em',marginTop:2 + 'em' }}>
            <div class="input-group">
              <input type="search" id="search" name="search" ref={inputRef} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" class="btn btn-outline-primary" onClick={()=>{setSearched(inputRef.current.value)}}>search</button>
              <h2>{searched}</h2> 
            </div>
          <h4>Choose city:</h4>
            <select id="places" value={value} onChange={(event)=>{setValue(event.target.value)}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
              <option value="">ALL</option>
              <option value="Manali">Manali</option>
              <option value="Udaipur">Udaipur</option>
            </select>
              <h4>Choose Aids:</h4>
            <select onChange={(event)=>{setDisability(event.target.value)}}  id="colours">
            <option value="">ALL</option>
              <option value="wu">Wheelchair user</option>
              <option value="vi">Visually Impaired</option>
              <option value="hi">Hearing Impaired</option>
              <option value="si">Speech Impaired</option>
            </select>
            <h3 style={{visibility: 'hidden'}}>{disablity}</h3>
            {console.log(disablity)}
        
        </div>
<Grid container item spacing={3}>

        {/* { Object.entries(details.details).map(([key, value]) => {
            if(key==0){
                {console.log(value.place_name)}
                {console.log(typeof(value))}
                {info=value}
                {console.log(info)}
          }
        })}
        <CardTemplate image={info.image} name={info.place_name} description={info.About}/> */}
        
       {details.details.map((place, id) => (
              <div key={id}> 
              <CardTemplate key={id} image={place.image} name={place.place_name} description={place.About}/>
              </div>
            
        ))} 

        </Grid>
        
      </div>
      </Grid>
            </div>      
    )}

  }

export default ViewPlaces;
