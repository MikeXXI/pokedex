import React from "react";
import ChangeLang from "./ChangeLang";
import logo from "../Ressource/logo.svg"
import { Box, Grid, TextField } from "@mui/material";

function Header({ selectLang, handleNameChange }) {
    return (
        <Grid container>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 300,
                    height: 200,
                    flexGrow: 1
                }} >
                <img
                    style={{
                        width: 250,
                        height: 150,
                    }}
                    src={logo}
                    alt={logo} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 300,
                    height: 200,
                    flexGrow: 1
                }} >
                <TextField
                    sx={{
                        color: 'white',
                        labelColor: 'white',
                        width: 300,
                    }}
                    id="search"
                    label="Entrer un pokémon :"
                    type="search" variant="filled"
                    onChange={event => handleNameChange(event.target.value)} />
            </Box>
            <Box

                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 300,
                    height: 200,
                    flexGrow: 1
                }} >
                <ChangeLang selectLang={selectLang} />
            </Box>

        </Grid>


    );
}

export default Header;
