import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CarouselSlide = ({content}) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={content.images.webp.image_url} alt=""/>
        </Grid>
        <Grid item xs={4}>
          {/**/}
        </Grid>
        <Grid item xs={4}>
          {/**/}
        </Grid>
        <Grid item xs={8}>
          {/**/}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarouselSlide;
