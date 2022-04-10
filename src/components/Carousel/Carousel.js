import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { Grid, styled } from '@mui/material';
import { Close as CloseIcon, ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = (props) => {
  const Arrow = (props) => {
    const { direction, clickHandler } = props;
    const icon = direction === 'left' ? <ChevronLeft fontSize={'large'} />: <ChevronRight fontSize={'large'} />
    return (<div
        style={{width: '80px',
        height: '240px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}
        onClick={clickHandler}
      >
        {icon}
      </div>)
  }
  
  const [index, setIndex] = useState(props.currIndex);
  const numSlides = props.content.length;
  
  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  }
  
  const StyledGridItem = styled(Grid)(({left}) => (
    {
      pointerEvents: 'auto',
      position: 'fixed',
      transform: 'translateY(-50%)',
      top: '50%', [left ? 'left': 'right'] : 0,
      color: 'white',
      display: 'flex',
      transition: '0.3s',
      '&:hover': {
        backgroundColor: '#000',
        opacity: 0.5
      }
    }
  ));
  
  return (
    <>
      {/*Portfolio 4 doesn't have any click events on icon*/}
      <CloseIcon sx={{ position: 'absolute', top: 0, right: 0, fontSize: 40, fontWeight: 'bold', p: 3, color: 'white', opacity: '0.3', pointerEvents: 'none' }} />
      <Grid container sx={{ zIndex: '9999999', display:'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', flexWrap: 'nowrap' }} >
        <StyledGridItem item left>
          <Arrow direction={'left'} clickHandler={() => onArrowClick('left')} />
        </StyledGridItem>
        {/*Did not use mui breakpoints to match the portfolio 4 exact widths*/}
        <Grid sx={{pointerEvents: 'auto', width: 'calc(100% - 160px)'}} item>
          <CarouselSlide  content={props.content[index]}/> )
        </Grid>
        <StyledGridItem item right>
          <Arrow direction={'right'} clickHandler={() => onArrowClick('right')} />
        </StyledGridItem>
      </Grid>
    </>
  )
}

export default Carousel;
