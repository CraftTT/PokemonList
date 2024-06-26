import React from 'react';
import './index.css';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="image" />
            <h3>{pokemon.name}</h3>
        </div>
    );
};

export default PokemonCard;
