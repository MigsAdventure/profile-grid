import React from 'react';
import { Card, CardMedia, CardContent, Typography, styled } from "@mui/material";

const AnimeCard = ({card}) => {
  const StyledCard = styled(Card)(() => ({
    width: '100vw',
    cursor: 'pointer',
  }))
  
  const StyledTypography = styled(Typography)(() => ({
    transform: 'scale(0)',
    transition: 500,
    opacity: '0'
  }));
  
  return(
    <StyledCard>
      <CardContent>
        <CardMedia
          className={'card-media'}
          sx={{ width: 'fill-available', transition: 300 }}
          component={'img'}
          image={card.images.webp.image_url}
          alt={card.title}
        >
        </CardMedia>
      </CardContent>
    </StyledCard>
  );
}

export default AnimeCard;
