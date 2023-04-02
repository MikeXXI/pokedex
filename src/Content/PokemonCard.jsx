import React from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

function PokemonCard({ id, name, image, type1, couleurType1, type2, couleurType2 }) {

    return (
        <Grid sx={{
            position: 'center',
            width: 300,
            height: 300,
            margin: 1,
        }}>
            <Link to={`/pokemon/${id - 1}`}
                id={id}
                name={name}
                image={image}
                type1={type1}
                couleurType1={couleurType1}
                type2={type2}
                couleurType2={couleurType2}
                sx={{
                    textDecoration: 'none',
                }}>
                <Card
                    sx={{
                        height: 300,
                        width: 300
                    }}>
                    N°{id}
                    <CardMedia
                        sx={{
                            height: 150,
                            width: 125,
                            margin: 'auto',
                            position: 'center',
                        }}
                        image={image}
                        title={image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Button variant="outlined"
                                sx={{

                                    color: "black",
                                    border: type1 === null ? 0 : 2,

                                    backgroundColor: couleurType1,
                                }}>{type1}</Button>
                            <Button variant="outlined"
                                sx={{
                                    color: "black",
                                    marginLeft: "5px",
                                    hidden: type2 === undefined ? true : false,
                                    opacity: type2 === undefined ? 0 : 1,
                                    border: type2 === undefined ? 0 : 2,
                                    backgroundColor: couleurType2,
                                }}>{type2}</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default PokemonCard;