import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
// import Slide from '@mui/material'

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
    <div>
      <Arrow direction={'left'} clickHandler={() => onArrowClick('left')} />
        <CarouselSlide content={props.content[index]}/> )
      <Arrow direction={'right'} clickHandler={() => onArrowClick('right')} />
    </div>
  )
}

export default Carousel;
