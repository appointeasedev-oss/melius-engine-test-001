import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardComponent = ({ cardData }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={cardData.image}
        alt={cardData.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
# Auto improvement by Melius