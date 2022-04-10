import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CarouselSlide = ({content}) => {
  return (
    <Card sx={{
      borderRadius: 5,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '500px',
      boxShadow: '20px 20px 20px black',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <CardContent>
        <Typography variant={'h4'} >{content.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default CarouselSlide;
