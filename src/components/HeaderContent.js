import React from 'react';
import { Typography } from "@mui/material";

const HeaderContent = ({title, subtitle, style}) => {
  return (
    <div style={style}>
      {
        title ? <Typography variant={'h2'}>Portfolio Grid 4</Typography> : <></>
      }
      {
        subtitle ? <Typography variant={'body1'} >This grid shows the items in a popup</Typography> : <></>
      }
    </div>
  )
}

export default HeaderContent;
