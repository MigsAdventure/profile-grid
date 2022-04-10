import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { Grid } from '@mui/material';

const Carousel = (props) => {
  const Arrow = (props) => {
    const { direction, clickHandler } = props;
    const icon = direction === 'left' ? <div>left</div> : <div>right</div>
    return <div onClick={clickHandler}>{icon}</div>
  }
  
  const [index, setIndex] = useState(props.currIndex);
  const numSlides = props.content.length;
  
  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  }
  
  return (
    <Grid container sx={{ zIndex: '9999999', display:'flex', alignItems: 'center', justifyContent: 'center' }} >
      <Grid item xs={1}>
        <Arrow direction={'left'} clickHandler={() => onArrowClick('left')} />
      </Grid>
      <Grid item xs={10}>
        <CarouselSlide  content={props.content[index]}/> )
      </Grid>
      <Grid item xs={1}>
        <Arrow direction={'right'} clickHandler={() => onArrowClick('right')} />
      </Grid>
    </Grid>
  )
}

export default Carousel;
