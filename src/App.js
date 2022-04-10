import './App.css';
import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery;'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  
  return (
    <ThemeProvider>
      <main className={"App"}>
      </main>
    </ThemeProvider>
  )
}
