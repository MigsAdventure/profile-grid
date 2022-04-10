import React, {useState} from 'react';
import { Backdrop, Box, Modal, CardContent, Fade, Grow } from "@mui/material";

const style = {
  display: 'flex',
  transform: 'scale(0)',
  margin: 'auto',
  textAlign: 'center',
  zIndex: 99999,
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
            <Box xs={12} sx={style}>
                  {props.children}
            </Box>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );
}

export default GalleryModal;
