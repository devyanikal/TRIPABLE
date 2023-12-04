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
    const [quan,setQuan]=useState({ num1: 0, num2: 0,num3: 0 });
    const handleChange = e => {
      setQuan({
        ...quan,
        [e.target.name]: e.target.value
      });
      console.log(quan);
    };
    useEffect(() =>{
      const query = new URLSearchParams(window.location.search);
      //setQuan(quan=>[...quan,document.getElementById("num1").value,document.getElementById("num2").value,document.getElementById("num3").value]);
      if (query.get("success")) {
        console.log("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }

        let data;
        // axios.get('http://127.0.0.1:7000/api/stripe/hotels/')
        axios.get('http://127.0.0.1:8000/hotel_data')
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

  <DetailedCard image={info.image} name={info.hotel_name} description={info.facility} location={info.landmark}  vi={info.visual_impaired} wu={info.wheelchair_user} hi={info.hearing_impaired} si={info.speech_impaired} facility={info.facility}/>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Room Type</th>
      <th scope="col">Facility</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{info.roomtype1}</td>
      <td>{info.facilityoftype1}</td>
      <td>₹{info.pricetype1}  <p style={{color: 'grey'}}>Per Night</p>
      Select Quantity:  <input name="num1" id="num1" onChange={handleChange} placeholder="0" type="number" min="0" max="100"/>
      </td>
    </tr>
    <tr>
      <td>{info.roomtype2}</td>
      <td>{info.facilityoftype2}</td>
      <td>₹{info.pricetype2}  <p style={{color: 'grey'}}>Per Night</p>
      Select Quantity:  <input name="num2" id="num2" onChange={handleChange} placeholder="0" type="number" min="0" max="100"/>
      </td>
    </tr>
    <tr>
      <td>{info.roomtype3}</td>
      <td>{info.facilityoftype3}</td>
      <td>₹{info.pricetype3}  <p style={{color: 'grey'}}>Per Night</p>
      Select Quantity:  <input name="num3" id="num3" onChange={handleChange} placeholder="0" type="number" min="0" max="100"/>
      </td>
    </tr>
  </tbody>
</table>
    <hr></hr>
    <form action={`${API_URL}/api/stripe/create-checkout-session/${hid}/${quan["num1"]}/${quan["num2"]}/${quan["num3"]}`} method="POST">
      <div class="text-center">
        <button class="btn btn-primary btn-lg active" type="submit">
          Checkout
        </button>
      </div>
      
      
    </form>
    

      </div>
      
    )
  }
}

export default HotelDetails