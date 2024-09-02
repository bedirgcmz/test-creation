"use client"
import { useState } from 'react';
import PokemonDetails from './PokemonDetails';

const PokemonCard = () => {
    const [randomPokemon, setRandomPokemon] = useState(null);
    const [getWithNamePokemon, setGetWithNamePokemon] = useState(null);
    const [pokemonName, setPokemonName] = useState("");

    // const audio = new Audio('/sound.mp3');

    const fetchRandomPokemon = async () => {
        // audio.play();
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 898 + 1));
            if (response.ok) {
                const data = await response.json();
                setRandomPokemon(data);
            } else {
                setRandomPokemon(null); 
                alert("Pokémon not found. Please check the name and try again.");
            }
        } catch (error) {
            console.error("Failed to fetch Pokémon:", error);
            setRandomPokemon(null); 
        }
    };

    const fetchPokemonByName = async () => {
        if (pokemonName) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                if (response.ok) {
                    const data = await response.json();
                    setGetWithNamePokemon(data);
                } else {
                    setGetWithNamePokemon(null); 
                    alert("Pokémon not found. Please check the name and try again.");
                }
            } catch (error) {
                console.error("Failed to fetch Pokémon:", error);
                setGetWithNamePokemon(null);
            }
        }
    };

    return (
        <>
            <div data-testid="pokemon-container" className='text-center mt-4'>
                <button 
                    data-testid="get-random-button" 
                    onClick={fetchRandomPokemon} 
                    className='px-3 py-2 text-[#2a9d8f] border-2 border-[#2a9d8f] rounded-xl hover:bg-[#2a9d8f] hover:text-white'
                >
                    Get Random Pokemon
                </button>
                {randomPokemon ? (
                    <PokemonDetails pokemon={randomPokemon} />
                ) : (
                    <p data-testid="redirection-sentence" className='mt-4 text-[#b56576]'>
                        Click to bring a random Pokemon with the help of the button.
                    </p>
                )}
            </div>

            <div data-testid="get-with-name-container" className='text-center mt-16 pt-4 border-t-2 w-screen'>
                <div className="flex justify-center items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Enter Pokemon name.." 
                        value={pokemonName} 
                        onChange={(e) => setPokemonName(e.target.value)} 
                        className="px-3 py-2 border-2 border-[#2a9d8f] rounded-lg text-center"
                    />
                    <button 
                        onClick={fetchPokemonByName} 
                        className='px-3 py-2 text-[#2a9d8f] border-2 border-[#2a9d8f] rounded-xl hover:bg-[#2a9d8f] hover:text-white'
                    >
                        Get Pokemon by Name
                    </button>
                </div>
                {getWithNamePokemon ? (
                    <div className='flex items center justify-center'>
                        <PokemonDetails pokemon={getWithNamePokemon} />
                    </div>
                ) : (
                    <p className='mt-4 text-[#b56576]'>
                        Enter a Pokemon name and click the button to get its details.
                    </p>
                )}
            </div>
        </>
    );
};

export default PokemonCard;
