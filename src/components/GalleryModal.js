import React, {useState} from 'react';
import { Backdrop, Box, Modal, CardContent, Fade, Grow } from "@mui/material";

const style = {
  display: 'flex',
  transform: 'scale(0)',
  margin: 'auto',
  textAlign: 'center',
  zIndex: 1301,
  height: '100%',
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
          timeout: 600
        }}
      >
        <Grow in={props.open} style={{ transformOrigin: '50% 50% 0' }}
              {...(props.open ? { timeout: 400 } : {})}>
          <Fade in={props.open} timeout={500}>
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
