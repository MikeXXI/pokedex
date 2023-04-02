import React, { useEffect, useState } from 'react';
import Header from './Header/Header'
import List from './Content/List'
import { Box, Grid, Container } from '@mui/material';


function App() {
  const [lang, setLang] = useState("fr");
  const [search, setSearch] = useState("");

  const [pokemonData, setPokemonData] = useState([]);
  const [typeTrad, setTypeData] = useState([]);
  const [load, isLoad] = useState(true);

  useEffect(function () {
    isLoad(true)
    fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
      .then(res => res.json())
      .then(data => {
        isLoad(false)
        setPokemonData(data)
      }
      )
  }, [])
  useEffect(function () {
    isLoad(true)
    fetch("https://pokedex-jgabriele.vercel.app/types.json")
      .then(res => res.json())
      .then(data => {
        isLoad(false)
        setTypeData(data)
      }
      )
  }, [])

  return (
    <Container
      style={{
        position: 'relative',
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: "#282c34",
        display: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'grey.500',
      }}>
      {load ?
        <Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'grey.500',
            }} >
            En cour de chargement ...
          </Box>
        </Grid> :

        <Grid>
          <Header selectLang={setLang} handleNameChange={setSearch} />
          <List pokemons={pokemonData} lang={lang} dataType={typeTrad} search={search}/>
        </Grid>

      }
    </Container>
  );
}



export default App;
