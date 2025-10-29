"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PokemonItem from "./PokemonItem";
import LoadingSkeleton from "./LoadingSkeleton";
import PaginationButton from "./PaginationButton";

const fetchPokemons = async (limit: number) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
  return res.data.results;
};

const fetchFavoritos=async()=>{
  const res=await axios.get("api/favorites");
  return res.data;
}

export default function PokemonList() {
  const [limit, setLimit] = useState(30);

  const { data:pokemons, isLoading, isError } = useQuery({
    queryKey: ["pokemons", limit],
    queryFn: () => fetchPokemons(limit),
  });

  const {data: favorites=[], isLoading: favLoading,}=useQuery({
    queryKey:["favorites"],
    queryFn: fetchFavoritos,
  });
  if (isLoading || favLoading) return <LoadingSkeleton />;
  if (isError) return <p className="text-red-600">Error al cargar los Pokémons. Intente más tarde</p>;

  return (
    <div className="container mx-auto">
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pokemons.map((p: any, i: number) => {
          
          const id = parseInt(p.url.split("/").filter(Boolean).pop());

          // Verifica si está en favoritos
          const isFavorite = favorites.some((f: any) => f.id === id);

          return (
            <PokemonItem
              key={i}
              id={id}
              name={p.name}
              url={p.url}
              isFavorite={isFavorite}
              
            />
          );
        })}
      </div>

      <div className="text-center mt-6">
        <PaginationButton onClick={() => setLimit(limit + 30)} />
      </div>
    </div>
  );
}
