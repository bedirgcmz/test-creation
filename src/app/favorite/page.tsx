"use client"
import React, { useState, useEffect } from 'react';

const Favorite = () => {
  // State tanımlamaları
  const [userFavoriteList, setUserFavoriteList] = useState<number[]>([]);
  const [pokemonData, setPokemonData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  // Pokémon verilerini fetch eden fonksiyon
  const fetchPokemonData = async () => {
    try {
      const data = await Promise.all(
        userFavoriteList.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          return response.json();
        })
      );
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLocalStorage = (pStringKey: string): number[] | null => {
    const data = localStorage.getItem(pStringKey);
    return data ? JSON.parse(data) : null;
};
  // Component mount olduğunda fetchPokemonData fonksiyonunu çağırıyoruz
  useEffect(() => {
    fetchPokemonData();
  }, [userFavoriteList]);

  useEffect(() => {
    const storedFavorites = getLocalStorage("favorites") || []
    setUserFavoriteList(storedFavorites)
  }, []);

  // Eğer veri yükleniyorsa, loading mesajı gösteriyoruz
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
        <h1 className='text-4xl text-[#ffd166] text-center my-6'>My Favorites</h1>
      <div className='flex gap-4 flex-wrap items-center justify-center mb-4'>
            {
              pokemonData.length > 0 ? (
                pokemonData.map((pokemon) => (
                <div className="max-w-[300px] flex flex-col relative justify-between items-center min-h-[200px] mt-4 p-3 border-2 rounded bg-[#f8f9fa] shadow-xl">
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
                    
                  </div>
                ))
                ) : (
                  <p>No favorite Pokémon found.</p>
                )
            }

      </div>
    </main>
  );
};

export default Favorite;
