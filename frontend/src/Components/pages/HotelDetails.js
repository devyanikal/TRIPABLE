import React,{ useState,useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailedCard from './DetailedCard';
import { API_URL } from '../../config/index';

function HotelDetails() {

    const [details, setDetails] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let params = useParams();
    console.log("Params : ", params)
    let hid = params.hid;
    console.log(hid)
    let info={};

    useEffect(() =>{
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        console.log("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }

        let data;
        axios.get('http://127.0.0.1:8000/api/stripe/hotels/')
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
 { Object.entries(details.details).map(([key, value]) => {
    if(key==hid-1){
          {info=value}
    }
 })}
  <DetailedCard image={info.image} name={info.name} description={info.facility} location={info.landmark}  vi={info.visual_impaired} wu={info.wheelchair_user} hi={info.hearing_impaired} si={info.speech_impaired}/>
    <div className="product">
      {/* <img
        src={info.image}
        alt={info.name}
      /> */}
      <div className="description">
      <h3>{info.name}</h3>
      <h5>{info.pricetype1}</h5>
      </div>
    </div>
    <form action={`${API_URL}/api/stripe/create-checkout-session/${hid}`} method="POST">
      <button type="submit">
        Checkout
      </button>
      
      
    </form>
    

      </div>
      
    )
  }
}

export default HotelDetails