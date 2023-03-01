import React, { useEffect, useState } from 'react';
// import ReactDom from 'react-dom';

function Pokédex() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
            });
    }, []);
    console.log(pokemonData);
    const pokemonCard = pokemonData.map(pokemon =>
        <PokemonCard id={pokemon.id} names={pokemon.names.fr} image={pokemon.image} types={pokemon.types}></PokemonCard>
    )
    // height = {pokemon.height} weight = {pokemon.weight}
    return pokemonCard
}

function PokemonCard(props) {
    
    return <div key={props.id} className="card" >
        <p>N°{props.id}</p>
        <h2>{props.names}</h2>
        <p>        
        <img src={props.image} alt={props.names} /> 
        </p>     
        <p>
            <div id="type1" className='fondType'>{props.types[0]}</div>
            <div id="type2" className='fondType'>{props.types[1]}</div>
        </p>
        {/* <p>Height: {props.height}m</p>
            <p>Weight: {props.weight}kg</p> */}
    </div>
}

const Content = () => {
    return (
        <div className="App-card">
            <Pokédex></Pokédex>
        </div>
    );
}
export default Content;