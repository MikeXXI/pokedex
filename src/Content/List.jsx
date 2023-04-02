import React from "react"
import PokemonCard from "./PokemonCard";
import { Grid } from "@mui/material";

function List({ pokemons, lang, dataType, search }) {
    const pokedex = [];
    pokemons.forEach((pokemon) => {
        if (pokemon.names[lang].toLowerCase().includes(search.toLowerCase()) ||
            pokemon.types[0].toUpperCase().includes(search.toUpperCase()) ||
            (pokemon.types[1] ? pokemon.types[1].toUpperCase().includes(search.toUpperCase()) : false)) {
            pokedex.push(<PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.names[lang]}
                image={pokemon.image}
                type1={dataType[pokemon.types[0]].translations[lang]}
                couleurType1={dataType[pokemon.types[0]].backgroundColor}
                type2={pokemon.types[1] ? dataType[pokemon.types[1]].translations[lang] : undefined}
                couleurType2={pokemon.types[1] ? dataType[pokemon.types[1]].backgroundColor : undefined}

            />)
        }
    })
    return (
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center'}}>            
                {pokedex}            
        </Grid>
    );
}


export default List;