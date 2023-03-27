import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import { useParams } from "react-router";
import ModalCard from './ModalCard';
// import ReactDom from 'react-dom';

function Pokédex(lang, setLang) {
    const { pokeId } = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    //const [load, isLoad] = useState(true);

    useEffect(() => {

        //isLoad(true)
        fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
            .then(response => response.json())
            .then(data => {
                //isLoad(false)
                setPokemonData(data);
            });
    }, []);
    const pokemonCard = pokemonData.map(pokemon =>
        <PokemonCard id={pokemon.id} names={pokemon.names[lang]} image={pokemon.image} types={pokemon.types}></PokemonCard>
    )
    // height = {pokemon.height} weight = {pokemon.weight}
    if (pokeId === undefined) {
        return pokemonCard;
    } else {
        <ModalCard></ModalCard>
        return pokemonCard[pokeId];
    }
}

function PokemonCard(props) {

    return (
        <Link 
        to={`/pokemon/${props.id-1}`}
        sx={{
            textDecoration: 'none',
        }}>
            <Card onMouseEnter={CardContent}
                sx={{
                    height: 300,
                    width: 300
                }}>
                    N°{props.id}
                <CardMedia
                    sx={{
                        height: 150,
                        width: 125,
                        margin: 'auto',
                        position: 'center',
                    }}
                    image={props.image}
                    title={props.names}
                />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div">
                        {props.names}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Button variant="outlined"
                            sx={{
                                color: "black",
                                border: props.types[0] === null ? 0 : 0,
                                backgroundColor: props.types[0] === "grass" ? "green"
                                    : props.types[0] === "fire" ? "red"
                                        : props.types[0] === "water" ? "blue"
                                            : props.types[0] === "bug" ? "yellow"
                                                : props.types[0] === "normal" ? "grey"
                                                    : props.types[0] === "poison" ? "purple"
                                                        : props.types[0] === "flying" ? "lightblue"
                                                            : props.types[0] === "electric" ? "yellow"
                                                                : props.types[0] === "ground" ? "brown"
                                                                    : props.types[0] === "rock" ? "grey"
                                                                        : props.types[0] === "psychic" ? "pink"
                                                                            : props.types[0] === "ice" ? "lightblue"
                                                                                : props.types[0] === "dragon" ? "purple"
                                                                                    : props.types[0] === "fairy" ? "pink"
                                                                                        : props.types[0] === "fighting" ? "red"
                                                                                            : props.types[0] === "spectrum" ? "grey"
                                                                                                : props.types[0] === "darkness" ? "black"
                                                                                                    : props.types[0] === "steel" ? "grey"
                                                                                                        : props.types[0] === "Inconnu" ? "grey" : "white",
                            }}>{props.types[0]}</Button>
                        <Button variant="outlined"
                            sx={{
                                color: "black",
                                marginLeft: "5px",
                                hidden: props.types[1] === undefined ? true : false,
                                opacity: props.types[1] === undefined ? 0 : 1,
                                border: props.types[1] === undefined ? 0 : 0,
                                backgroundColor: props.types[1] === "grass" ? "green"
                                    : props.types[1] === "fire" ? "red"
                                        : props.types[1] === "water" ? "blue"
                                            : props.types[1] === "bug" ? "yellow"
                                                : props.types[1] === "normal" ? "grey"
                                                    : props.types[1] === "poison" ? "purple"
                                                        : props.types[1] === "flying" ? "lightblue"
                                                            : props.types[1] === "electric" ? "yellow"
                                                                : props.types[1] === "ground" ? "brown"
                                                                    : props.types[1] === "rock" ? "grey"
                                                                        : props.types[1] === "psychic" ? "pink"
                                                                            : props.types[1] === "ice" ? "lightblue"
                                                                                : props.types[1] === "dragon" ? "purple"
                                                                                    : props.types[1] === "fairy" ? "pink"
                                                                                        : props.types[1] === "fighting" ? "red"
                                                                                            : props.types[1] === "spectrum" ? "grey"
                                                                                                : props.types[1] === "darkness" ? "black"
                                                                                                    : props.types[1] === "steel" ? "grey"
                                                                                                        : props.types[1] === "Inconnu" ? "grey" : "white",
                            }}>{props.types[1]}</Button>

                            
                        {/* <p>Height: {props.height}m</p>
            <p>Weight: {props.weight}kg</p> */}

                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}


export default function List() {

    return (
        <div className="App-card">
            <Pokédex />
        </div>
    );
}