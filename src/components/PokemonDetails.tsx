import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export interface Pokemon {
    id: number; // Pokemon ID'si de dahil ediliyor
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
    const [favorite, setFavorite] = useState<boolean>(false);
    const [favoriteList, setFavoriteList] = useState<number[]>([]);

    useEffect(() => {
        // get favorite list from local
        const storedFavorites = getLocalStorage("favorites") || [];
        setFavoriteList(storedFavorites);

        // // Eğer bu Pokémon favorilerdeyse, kalp dolu olarak başlat
        // if (storedFavorites.includes(pokemon.id)) {
        //     setFavorite(true);
        // }
    }, [pokemon.id]);

    useEffect(() => {
        favoriteList.includes(pokemon.id) ? setFavorite(true) : setFavorite(false)
    },[pokemon])

    const addFavorites = () => {
        const updatedFavorites = favorite
            // Delete from favorite list
            ? favoriteList.filter(id => id !== pokemon.id) 
            // add to favorite list
            : [...favoriteList, pokemon.id]; 
        setFavorite(!favorite);
        setFavoriteList(updatedFavorites);
        setLocalStorage("favorites", updatedFavorites);
    };

    const setLocalStorage = (pStringKey: string, pArray: any[]): void => {
        localStorage.setItem(pStringKey, JSON.stringify(pArray));
    };

    const getLocalStorage = (pStringKey: string): number[] | null => {
        const data = localStorage.getItem(pStringKey);
        return data ? JSON.parse(data) : null;
    };

    return (
        <div className="w-[300px] flex flex-col relative justify-between items-center min-h-[200px] my-4 p-3 border-2 rounded bg-[#f8f9fa] shadow-xl">
            <h2 data-testid="poke-name" className="text-2xl text-center text-[#f4a261]">
                {pokemon.name}
            </h2>
            <img
                data-testid="poke-img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={160}
            />
            <p data-testid="poke-features" className="text-[#ccc5b9]">Height: {pokemon.height}</p>
            <p data-testid="poke-features" className="text-[#ccc5b9]">Weight: {pokemon.weight}</p>
            {favorite ? (
                <FaHeart
                    onClick={addFavorites}
                    className="absolute top-5 right-5 text-3xl text-[#ef476f]"
                />
            ) : (
                <FaRegHeart
                    onClick={addFavorites}
                    className="absolute top-5 right-5 text-3xl text-[#ef476f]"
                />
            )}
        </div>
    );
};

export default PokemonDetails;

// import { useState, useEffect } from "react";
// import { FaRegHeart, FaHeart } from "react-icons/fa6";

// export interface Pokemon {
//     id: number;
//     name: string;
//     height: number;
//     weight: number;
//     sprites: {
//         front_default: string;
//     };
// }

// interface PokemonDetailsProps {
//     pokemon: Pokemon;
// }

// const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
//     const [favorite, setFavorite] = useState<boolean>(false);
//     const [favoriteList, setFavoriteList] = useState<number[]>([]);

//     useEffect(() => {
//         // Component mount olduğunda localStorage'dan favorileri alıyoruz
//         const storedFavorites = getLocalStorage("favorites") || [];
//         setFavoriteList(storedFavorites);

//         // Eğer bu Pokémon favorilerdeyse, kalp dolu olarak başlat
//         if (storedFavorites.includes(pokemon.id)) {
//             setFavorite(true);
//         }
//     }, [pokemon.id]);

//     const addFavorites = () => {
//         const updatedFavorites = favorite
//             ? favoriteList.filter(id => id !== pokemon.id) // favorilerden çıkarma
//             : [...favoriteList, pokemon.id]; // favorilere ekleme

//         setFavorite(!favorite);
//         setFavoriteList(updatedFavorites);
//         setLocalStorage("favorites", updatedFavorites);
//     };

//     const setLocalStorage = (pStringKey: string, pArray: any[]): void => {
//         localStorage.setItem(pStringKey, JSON.stringify(pArray));
//     };

//     const getLocalStorage = (pStringKey: string): number[] | null => {
//         const data = localStorage.getItem(pStringKey);
//         return data ? JSON.parse(data) : null;
//     };

//     return (
//         <div className="min-w-[300px] flex flex-col relative justify-between items-center min-h-[200px] mt-4 p-3 border-2 rounded bg-[#f8f9fa] shadow-xl">
//             <h2 data-testid="poke-name" className="text-2xl text-center text-[#f4a261]">
//                 {pokemon.name}
//             </h2>
//             <img
//                 data-testid="poke-img"
//                 src={pokemon.sprites.front_default}
//                 alt={pokemon.name}
//                 width={160}
//             />
//             <p data-testid="poke-features" className="text-[#ccc5b9]">Height: {pokemon.height}</p>
//             <p data-testid="poke-features" className="text-[#ccc5b9]">Weight: {pokemon.weight}</p>
//             {favorite ? (
//                 <FaHeart
//                     onClick={addFavorites}
//                     className="absolute top-5 right-5 text-3xl text-[#ef476f]"
//                 />
//             ) : (
//                 <FaRegHeart
//                     onClick={addFavorites}
//                     className="absolute top-5 right-5 text-3xl text-[#ef476f]"
//                 />
//             )}
//         </div>
//     );
// };

// export default PokemonDetails;
