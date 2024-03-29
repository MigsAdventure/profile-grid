import React, { useMemo, useState } from 'react';
import { Grid, styled, Grow, CircularProgress } from '@mui/material';
import AnimeCard from './AnimeCard';
import Carousel from "./Carousel/Carousel";
import GalleryModal from "./GalleryModal";
import HeaderContent from "./HeaderContent";

const Gallery = ({cards}) => {
  
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const toggleShow = (id) => {
    setSlide(id);
    setOpen(x => !x)
  };
  
  /** Under normal circumstances, we shouldn't go over the intrinsic size of images to
   prevent pixelation, but for this project, I need it to fill the mobile view to patch portfolio grid 4 **/
  const smallScreen = () => (window.innerWidth < 600);
  
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
  
  const renderCards = () => {
    let x = 0;
    return(
      cards.length ?
        cards.map((card, i) => {
          // keep transition animation at the same speed even after fetching new anime titles
          i % 25 === 0 && (x = 0)
          x++
          return (
            <Grow key={card.mal_id} in={!!cards.length} timeout={{enter: 500}} style={{ transformOrigin: '50% 50% 0' }}
                  {...(!!cards.length ? { timeout: (100 * x) } : {})}  unmountOnExit >
              <StyledGrid item xs={12} sm={6} md={4} lg={3}>
                <AnimeCard id={i} card={card} toggleShow={toggleShow} smallScreen={smallScreen()} />
              </StyledGrid>
            </Grow>
          )
        })
        :
        <CircularProgress size={'7em'}  sx={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)', margin: 'auto', left: 0, right: 0}}/>
    )
  }
  
  //prevent remapping of cards on every rerender
  const memoRenderCards = useMemo(() => renderCards(cards), [cards]);
  
  return(
    <>
      <GalleryModal open={open} toggleShow={toggleShow}>
        <Carousel content={cards} currIndex={slide} toggleShow={toggleShow} />
      </GalleryModal>
      <HeaderContent style={{margin: '40px 0 28px'}} title={'Portfolio Grid 4'} subtitle={'This grid shows the items in a popup'} />
      <Grid container spacing={1} sx={{ p:1 }} direction={"row"}>
        {memoRenderCards}
      </Grid>
    </>
  );
}

export default Gallery;
