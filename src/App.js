import './App.css';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import Gallery from './components/Gallery';
import debounce from 'lodash/debounce';

const App = () => {
  // We will store the anime objects in here and pass into a gallery component
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [ firstLoad, setFirstLoad ] = useState(true);
  const [ hasMore, setHasMore ] = useState(true);
  
  //define api call to get animes from jikan.me
  const fetchAnime = async(currPage) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${currPage}`);
    response.json()
    .then(({data, pagination}) => {
      // response  has a bool for pagination
      setHasMore(pagination);
      // take our previous state and add the additional 25 objeccts to our current array
      setCards(prevState => ([...prevState, ...data]));
    })
  }
  
  // call fetchAnime function to fetch data from the api
  useEffect(() => {
    setPage((page) => page + 1);
    // fetchAnime(page);
    if (firstLoad) {
      fetchAnime(page)
      setFirstLoad(false);
    }
  
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasMore])
  
  const handleScroll = debounce(
    () => {
      // height of the visible window | how far the user has scrolled | full height of the window (even if not visible)
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && fetchAnime(page);
    },
    800,
    { leading: true }
  )
  
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
  
  theme = responsiveFontSizes(theme)
  
  return (
    <ThemeProvider theme={theme}>
      <main className={"App"}>
        <Gallery cards={cards}/>
      </main>
    </ThemeProvider>
  )
}

export default App;
