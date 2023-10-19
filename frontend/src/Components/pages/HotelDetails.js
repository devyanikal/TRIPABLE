import React, { Component } from 'react'
import { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router'
import DetailedCard from './DetailedCard';


function HotelDetails() {
    const [details, setDetails] = useState([]);
const [isLoading, setLoading] = useState(true);
let params = useParams();
console.log("Params : ", params)
let hid = params.hid;
console.log(hid)
let info={};


    useEffect(() =>{
        let data;
        axios.get('http://127.0.0.1:8000/hotels/')
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
 {console.log(typeof(value))}
 {info=value}
 {console.log(info)}
 {console.log(info.visual_impaired)}
 {if (info.visual_impaired) {
  const {vi_aid} = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDELrvS4eUp1ojaoSIAozCHldIkht0g-UYzQ&usqp=CAU'
 }}
 }
 })}
  <DetailedCard image={info.image} name={info.name} description={info.facility} location={info.landmark}  vi={info.visual_impaired} wu={info.wheelchair_user} hi={info.hearing_impaired} si={info.speech_impaired}/>
      </div>
    )
  }
}

export default HotelDetails