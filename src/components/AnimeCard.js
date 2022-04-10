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
      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: 0, p: 0, height: '100%'}}>
        <CardMedia
          className={'card-media'}
          sx={{ width: 'fill-available', transition: 300 }}
          component={'img'}
          image={card.images.webp.image_url}
          alt={card.title}
        >
        </CardMedia>
        <StyledTypography className={'typography'} variant={'h4'}>{card.title}</StyledTypography>
      </CardContent>
    </StyledCard>
  );
}

export default AnimeCard;
