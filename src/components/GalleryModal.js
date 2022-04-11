import React, {useState} from 'react';
import { Backdrop, Box, Modal, CardContent, Fade, Grow } from "@mui/material";

const style = {
  display: 'flex',
  transform: 'scale(0)',
  margin: 'auto',
  textAlign: 'center',
  zIndex: 1301,
  height: '100%',
  // remove mui box focus outline
  ['&:focus-visible']: {
    outline: 'none'
  }
};

const GalleryModal = (props) => {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={props.toggleShow}
        open={props.open}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
          style: {
            backgroundColor: 'rgba(0,0,0, 0.8)'
          }
        }}
      >
        <Grow in={props.open} style={{ transformOrigin: '50% 50% 0' }}
              {...(props.open ? { timeout: 800 } : {})}>
            <Box xs={12} sx={style}>
                  {props.children}
            </Box>
        </Grow>
      </Modal>
    </div>
  );
}

export default GalleryModal;
