// components/PokemonDetails.tsx

export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

interface PokemonDetailsProps {
    pokemon: Pokemon; 
}

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    return (
        <div className="min-w-[300px] flex flex-col justify-between items-center min-h-[200px] mt-4 p-3 border-2 rounded bg-[#f8f9fa] shadow-xl">
            <h2 data-testid="poke-name" className="text-2xl text-center text-[#f4a261]">{pokemon.name}</h2>
            <img data-testid="poke-img" src={pokemon.sprites.front_default} alt={pokemon.name} width={160}/>
            <p data-testid="poke-features" className="text-[#ccc5b9]">Height: {pokemon.height}</p>
            <p data-testid="poke-features" className="text-[#ccc5b9]">Weight: {pokemon.weight}</p>
        </div>
    );
};

export default PokemonDetails;
