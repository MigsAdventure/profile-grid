import React from 'react';
import { Grid, styled } from '@mui/material';

const Gallery = ({cards}) => {
  const StyledGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    flexBasis: "100%",
    maxHeight: 850,
  }))
  
  return(
    <>
      <Grid container spacing={1} sx={{ p:1 }} direction={"row"}>
        {
          cards.length ?
            cards.map((card) => {
              return (
                <StyledGrid key={card.mal_id}>
                  <div>{card.title}</div>
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
