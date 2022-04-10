import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CarouselSlide = ({content}) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#d1e8f6', mt: 5, zIndex: 9999 }}>
      <Grid container spacing={2} sx={{ p: 5 }}>
        <Grid item xs={12}>
          <Typography variant={'h2'} fontWeight={'bold'}>
            {content.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img style={{width: '100%', maxWidth: 450}} src={content.images.webp.large_image_url} alt={content.title}/>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={'h3'}>
            Test
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography  variant={'h3'}>
            Test
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {/**/}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarouselSlide;
