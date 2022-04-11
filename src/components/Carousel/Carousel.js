import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { Grid, styled } from '@mui/material';
import { Close, ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = ({content, currIndex, toggleShow}) => {
  const [index, setIndex] = useState(currIndex);
  const numSlides = content.length;
  
  const Arrow = ({direction, clickHandler}) => {
    const icon = direction === 'left' ? <ChevronLeft sx={{fontSize: 80}} />: <ChevronRight sx={{fontSize: 80}} />
    return (<div
        style={{width: '100%',
        height: '100%', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}
        onClick={clickHandler}
      >
        {icon}
      </div>)
  }
  
  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  }
  
  const StyledSlideWrapper = styled(Grid)(({theme}) => (
    {
      pointerEvents: 'auto',
      height: '100%',
      overflow: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 160px)'
      }
    }
  ));
  
  const StyledArrowWrapper = styled(Grid)(({left, theme}) => (
    {
      pointerEvents: 'auto',
      position: 'fixed',
      transform: 'translate3d(0,-50%, 0)',
      top: '50%', [left ? 'left': 'right'] : 0,
      display: 'flex',
      transition: 'opacity 0.3s',
      cursor: 'pointer',
      color: 'rgba(0,0,0,0.5)',
      height: '120px',
      width: '80px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      [theme.breakpoints.up('sm')]: {
        height: '240px',
        color: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: 1
        }
      }
    }
  ));
  
  const StyledClosedIcon = styled(Close)(({theme}) => (
    {
      position: 'absolute', top: 0, right: 0, fontSize: 40, fontWeight: 'bold', p: 3, color: 'black', zIndex: 1303,
      [theme.breakpoints.up('md')]: {
        opacity: '0.3',
      }
    }
  ));
  
  const StyledGrid = styled(Grid)(({theme}) => (
    {
      zIndex: 1300,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      flexWrap: 'nowrap',
      height: '100%',
      [theme.breakpoints.up('md')]: {
        padding: '32px 0',
      }
    }
  ));
  
  return (
    <>
      {/*Portfolio 4 doesn't have any click events on icon*/}
      <StyledClosedIcon onClick={toggleShow}  />
      <StyledGrid container >
        <StyledArrowWrapper item left>
          <Arrow direction={'left'} clickHandler={() => onArrowClick('left')} />
        </StyledArrowWrapper>
        {/*Did not use mui breakpoints to match the portfolio 4 exact widths*/}
        <StyledSlideWrapper item>
          <CarouselSlide  content={content[index]}/> )
        </StyledSlideWrapper>
        <StyledArrowWrapper item right>
          <Arrow direction={'right'} clickHandler={() => onArrowClick('right')} />
        </StyledArrowWrapper>
      </StyledGrid>
    </>
  )
}

export default Carousel;
