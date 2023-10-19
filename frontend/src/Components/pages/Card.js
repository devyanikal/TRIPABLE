import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import './Card.css'

export default function CardTemplate(props) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }} className='container1'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          className='imgCard'
        />
        <CardContent className='text_area'>
          <Typography gutterBottom variant="h5" component="div" color="#464947">
            {props.name}
          </Typography>
          <Typography variant="body2" color="#464947" height={'10%'} maxlength={'50'}>
            {props.description}
          </Typography>
          <Typography variant="body3" color="#464947" height={'20%'}>
            more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}