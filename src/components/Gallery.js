import React, { useState } from 'react';
import { Grid, styled } from '@mui/material';
import AnimeCard from './AnimeCard';
import Carousel from "./Carousel/Carousel";
import GalleryModal from "./GalleryModal";

const Gallery = ({cards}) => {
  
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
  
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const toggleShow = (id) => {
    setSlide(id);
    setOpen(x => !x)
  };
  return(
    <>
      <GalleryModal open={open} toggleShow={toggleShow}>
        <Carousel content={cards} currIndex={slide} toggleShow={toggleShow} />
      </GalleryModal>
      <Grid container spacing={1} sx={{ p:1 }} direction={"row"}>
        {
          cards.length ?
            cards.map((card, i) => {
              return (
                <StyledGrid item key={card.mal_id} xs={12} sm={6} md={4} lg={3}>
                  <AnimeCard id={i} card={card} toggleShow={toggleShow} />
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
