import React, {useState} from 'react';
import { Backdrop, Box, Modal, CardContent, Fade, Grow } from "@mui/material";

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'scale(0)',
  width: 400,
  bgColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  margin: 'auto'
};

const GalleryModal = (props) => {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={props.toggleShow}
        open={props.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700
        }}
      >
        <Grow in={props.open} timeout={500}>
          <Fade in={props.open} timeout={300}>
            <Box sx={style}>
                <CardContent sx={{zIndex: 1301}}>
                  {props.children}
                </CardContent>
            </Box>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );
}

export default GalleryModal;
