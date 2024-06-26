import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './index.css';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=6');
                const pokemonUrls = response.data.results.map(pokemon => pokemon.url);
                const pokemonDataPromises = pokemonUrls.map(url => axios.get(url));
                const pokemonDataResponses = await Promise.all(pokemonDataPromises);
                const pokemonData = pokemonDataResponses.map(response => response.data);
                setPokemons(pokemonData);
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div className="container">
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
