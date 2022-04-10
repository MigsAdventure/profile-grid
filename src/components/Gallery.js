import React, { useState } from 'react';
import { Grid, styled } from '@mui/material';
import AnimeCard from './AnimeCard';
import Carousel from "./ModalCarousel/Carousel";
import CarouselSlide from "./ModalCarousel/CarouselSlide";

const Gallery = ({cards}) => {
  const items = [
    {
      title: 'slide1'
    },
    {
      title: 'slide2'
    },
    {
      title: 'slide3'
    },
    {
      title: 'slide4'
    }
  ]
  
  const StyledGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    flexBasis: "100%",
    maxHeight: 850,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 620
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '20%'
    }
  }))
  
  return(
    <>
      <Carousel content={items} />
      <Grid container spacing={1} sx={{ p:1 }} direction={"row"}>
        {
          cards.length ?
            cards.map((card) => {
              return (
                <StyledGrid item key={card.mal_id} xs={12} sm={6} md={4} lg={3}>
                  <AnimeCard card={card} />
                </StyledGrid>
              )
          }):
            <></>
        }
      </Grid>
    </>
  );
}

export default Gallery;
