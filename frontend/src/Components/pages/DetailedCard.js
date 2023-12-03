import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Detailed_Card.css'
import {useState} from 'react'

export default function DetailedCard(props) {

  return (

    <div>
        <br></br>
        <center><div className='pd_img'>
  <center><img src={props.image} width={800} height={500}></img></center>
  </div></center>
  <div className='pd'>
    <center><b><p>{props.name}</p></b></center>
    <p>{props.description}</p>
    <p>Location <br></br> {props.location}</p>
    {console.log(props.vi)}
    <h4>Aids Provided</h4>
    <p>Visual Impaired {props.vi?  ' ✅ ' : ' ❌ '} </p>
    <p>Wheelchair User {props.wu?  ' ✅ ' : ' ❌ '}</p>
    <p>Hearing Impaired{props.hi?  ' ✅ ' : ' ❌ '}</p>
    <p>Speech Impaired{props.si?  ' ✅ ' : ' ❌ '}</p>
    <p><h4>Facilities</h4> {props.facility}</p>

  </div>
</div>

  );
}