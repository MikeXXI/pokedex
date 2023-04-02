import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router";
import { Card, Dialog } from "@mui/material";
import pokemons from "../Ressource/pokemon.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function DialogCard() {

    const [open, setOpen] = React.useState(true);
    const { pokeId } = useParams();
    const navigate = useNavigate();
    const pokemon = pokemons[pokeId];
    const pokemonWeight = hectoToKg(pokemon.weight)
    const pokemonHeight = decimetreToMetre(pokemon.height)

    function handleHome() {
        navigate("/");
    }

    function handleWindowLocationClose() {
        handleHome();
        setOpen(false)
    };

    function hectoToKg(hecto) {
        return hecto / 10
    }

    function decimetreToMetre(decimetre) {
        return decimetre / 10
    }

    return (
        <Dialog
            open={open}
            onClose={handleWindowLocationClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card
                sx={{
                    width: '600px',
                    height: '750px'
                }}>
                <Typography variant="h5">
                    N°{pokemon.id} {pokemon.names.fr}
                </Typography>
                <Grid
                    sx={{
                        display: 'flex',
                        height: '150px',

                    }}>
                    <Typography variant="h6"
                        sx={{
                            justifyContent: 'left',

                            width: '100%',
                        }}>
                        <br />
                        Poids : {pokemonWeight} KG
                        <br />
                        Taille : {pokemonHeight} M
                        <br />
                        Type: {pokemon.types[0]} {pokemon.types[1]}
                        <br /> <br />
                        Attaques :
                    </Typography>
                    <Box
                        sx={{
                            padding: '2px',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '1px solid black',
                        }}>
                        <img src={pokemon.image}
                            alt={pokemon.image} />
                    </Box>
                </Grid>
                <Typography
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "5px"
                    }}>
                    {pokemon.moves.map((move) => {
                        return <Typography key={move} fontFamily={['monospace']} sx={{ mt: 2 }}>
                            {move},
                        </Typography>
                    })}
                </Typography>
            </Card>
        </Dialog>
    );
}
