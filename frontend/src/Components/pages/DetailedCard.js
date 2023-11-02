import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Detailed_Card.css'

export default function DetailedCard(props) {
  return (
    // <div>
    // <Card sx={{ maxWidth: 345 }} className='container1'>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={props.image}
    //       className='imgCard'
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div" color="#464947">
    //         {props.name}
    //       </Typography>
    //       <Typography variant="body2" color="#464947" height={45}>
    //         {props.description}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   {/* <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //   </CardActions> */}
    // </Card>
    // </div>

    <div>
        <br></br>
        <center><div className='pd_img'>
  <center><img src={props.image} width={800} height={500}></img></center>
  </div></center>
  <div className='pd'>
    <center><b><p>{props.name}</p></b></center>
    <p>{props.description}</p>
    <p>Location <br></br> {props.location}</p>
    <p>Visual Aid {props.vi} <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9DoEc2mzo5nD0umTOw1LF5uHt6uHw/n0NosGspmC92tniv1LBlr2gxmjY+n0Lt9e6mzqe11rb2+vbA3cEflSbH4MjS5tPY6dni7+Lu9u9Io0xrsW5ztXV+uoGEvYaPwpFRp1WayJvxFw5lAAADMElEQVR4nO3Zi0LaQBCFYcJF4w0UkSq1te37P2RZog0hGXJh08xM/u8BIMczzm50MgEAAAAAAAAAAAAAAAAAAAAAAIAjz0M/QN8Wy8ehH6Ffi9t05TriYp4kaeo4YgjoOuLiNklcR8waPET0+bv41aDbiHmDTge1GNBhi8cj6rLF0wbdtVhu0FmLVQ0eIk6dRKxucG96NfSjxSE1mEyvh360OOSAXhoUR9R9g3dDP1ocI14yXgKKDXoZ0fEeE14aHO8x4SXgeI8JLw2yZIwb8U3GfYPuA7JkbBhxg162KEvGOJaMdSNu0MsW5ZgwjiVjHQ1a5/+YcD+iHBPGjfgm4z6glxFlyRjHTca6ER8T7keUJWPDiBv8r0tm09snKzkm1i83PX2ykhHdzJNZPxGVHBPb8Bi9RFTS4DZbBbOH6J+s5Jj4tvz82ugtKlkyr/nPOXKLSo6J1+XRV0dtUcmSeVsWvjxiRCVL5m2WFr8+2qAqWTKPaXr6AJFaVNLgblUKGKlFJUtm970iYJQWlSyZXVIZMEKLSkZ08vwwEx7kwhaVNBj0E1FLgwc3YsTug6rkmPgiR+zaopK7aO49couqRjQjR+zSoqIlk3ufxouosMHghxix7aDe67jJlMkR27V4r7PBIE6LSu6i1WK0qO6YKLq7uEWlSyZ3aUR5yaj558vVRYOqeMnkri9oUdldVCJHrGtR5U2mys+OLcq/g4pGNCNHPNei8mOiqEtE9cdE0cdSeFxxUFXfZKrIEatblI8JpQH3EVutG0NLJtemRVNLJtc8orElk/vVcN2ofeGtJ0c8btFsg0GTFg03GNS3KB8Tyu6ikroWTbwunXc+osGDvuzcoJpeMrk/UsTVb+neYyvgPqLUlMTSiGZaRrTWYNAqor0GgxYRLTYYNI5os8GgYUSrDQZPTSJaDtgoopW7qKQ2ou0Gg5qI1hsMnqR3QR8NBmdatHtMFIkRvQQU3wh9jGimMqKfBoOKPz15ajAovdl7OCaKTiL6GtHM+nhQvY1oZj13PKKZfy36bDD4bNFrg8GhRb8NBpu584D7iC8Oj4mi7dAPAAAAAAAAAAAAAKCzv0qtJeYzM8PtAAAAAElFTkSuQmCC' width={'20px'} height={'20px'}/></p>
    <p>{props.wu}</p>
    <p>{props.hi}</p>
    <p>{props.si}</p>

  </div>
</div>

  );
}