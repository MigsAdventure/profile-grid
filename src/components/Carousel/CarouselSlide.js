import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CarouselSlide = ({content}) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#d1e8f6', zIndex: 1302 }}>
      <Grid container spacing={2} sx={{ p: 5, maxWidth: 1200, margin: 'auto'}} >
        <Grid item xs={12}>
          <Typography variant={'h2'} fontWeight={'bold'} gutterBottom >
            {content.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img style={{width: '100%', maxWidth: 450, margin: '40px 0'}} src={content.images.webp.large_image_url} alt={content.title}/>
        </Grid>
        <Grid item xs={12} md={4} lg={3} align={'left'}>
          <Typography variant={'h3'}>
            Summary
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={9} align={'left'}>
          <Typography lineHeight={'28px'} variant={'p'} >
            {content.synopsis}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{position: 'relative', overflow: 'hidden', paddingBottom: '56%', margin: '50px 0 30px'}} >
          <iframe
            src={content.trailer.embed_url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            style={{ position: 'absolute', top: 0, left: 0, right: 0, margin: 'auto', width: '100%', height: '100%', maxWidth: '800px'}}
          />{" "}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarouselSlide;
