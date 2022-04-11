import React from 'react';
import {Card, CardMedia, CardContent, Typography, styled} from "@mui/material";

const AnimeCard = ({card, toggleShow, id, smallScreen}) => {
  
  const StyledCard = styled(Card)(({theme}) => ({
    width: '100vw',
    cursor: 'pointer',
    flexBasis: '100%',
    boxShadow: 'none',
    '&:hover .card-media': {
      transform: 'scale(3)',
      opacity: 0
    },
    '&:hover .typography': {
      transform: 'scale(1)',
      opacity: 1
    },
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
      maxWidth: 450
    }
  }));
  
  const StyledTypography = styled(Typography)(() => ({
    transform: 'scale(0)',
    transition: '0.5s',
    opacity: '0',
    display: 'flex',
    alignSelf: 'center',
    maxWidth: '300px'
  }));
  
  return(
    <StyledCard onClick={() => toggleShow(id)}>
      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'stretch', border: 0, p: 0, height: '100%'}}>
        <CardMedia
          className={'card-media'}
          sx={{ width: 'fill-available', transition: '0.3s'}}
          component={'img'}
          image={smallScreen ? card.images.webp.large_image_url : card.images.webp.image_url}
          alt={card.title}
        />
        <StyledTypography className={'typography'} position={'absolute'} variant={'h4'}>{card.title}</StyledTypography>
      </CardContent>
    </StyledCard>
  );
}

export default AnimeCard;
