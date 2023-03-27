import React from "react";
import { Card, Modal, Typography } from "@mui/material";

const ModalCard = () => {
    return (
        <div>
            <Modal
                // open={open}
                // onClose={handleWindowLocationClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                {/* <Card sx={{ m: 'auto', width: '350px', height: '400px' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        N°{pokemon.id} {pokemon.names[lang]}
                    </Typography>
                    <img src={pokemon.image} alt="" style={{ width: "20%" }} />
                    <Typography id="modal-modal-description" sx={{ mt: 1, display: 'flex' }} gap={"25px"}>
                        {pokemon.types.map((type) => { return <div key={type} className={"type-" + type}>{typesTrad[type][lang]}</div> })}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Poids : {pokemonWeight} kg Taille : {pokemonHeight} m <br /> Attaques:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: "5px" }}>
                        {pokemon.moves.map((move) => { return <Typography key={move} id="modal-modal-description" fontFamily={['monospace']} sx={{ mt: 2 }}>{move}</Typography> })}
                    </Typography>
                </Card> */}
            </Modal>
        </div>
    );
}

export default ModalCard;

