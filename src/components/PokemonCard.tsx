"use client"
import { useState } from 'react';
import PokemonDetails from './PokemonDetails';

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 898 + 1));
        const data = await response.json();
        setPokemon(data);
    };

    return (
        <div className='text-center'>
            <button onClick={fetchPokemon} className='px-3 py-2 text-[#2a9d8f] border-2 border-[#2a9d8f] rounded-xl hover:bg-[#2a9d8f] hover:text-white'>Get Random Pokemon</button>
            {pokemon ? <PokemonDetails pokemon={pokemon} /> : <p className='mt-4 text-[#b56576]'>Click to bring a random Pokemon with the help of the button.</p>}
        </div>
    );
};

export default PokemonCard;
