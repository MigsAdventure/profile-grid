import './App.css';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import Gallery from './components/Gallery';

const App = () => {
  // We will store the anime objects in here and pass into a gallery component
  const [cards, setCards] = useState([]);
  
  //define api call to get animes from jikan.me
  const fetchAnime = async() => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    return await response.json();
  }
  
  // call fetchAnime function to fetch data from the api
  useEffect(() => {
    fetchAnime().then(({data}) => {
      setCards(data);
    });
  }, [])
  
  let theme = createTheme({
    typography: {
      fontFamily: '"Open Sans",sans-serif',
      fontWeight: 400,
      letterSpacing: '-1.12px',
      h4: {
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 600
      },
      h2: {
        fontFamily: '"Poppins",sans-serif',
        fontWeight: 600,
        letterSpacing: '-1.12px'
      },
      h3: {
        fontFamily: '"Poppins",sans-serif',
        fontWeight: 600,
        letterSpacing: '-1.12px'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <main className={"App"}>
        <Gallery cards={cards}/>
      </main>
    </ThemeProvider>
  )
}

export default App;
