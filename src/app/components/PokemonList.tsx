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

export default function PokemonList() {
  const [limit, setLimit] = useState(30);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons", limit],
    queryFn: () => fetchPokemons(limit),
  });

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <p className="text-red-600">Error al cargar los Pokémons. Intente más tarde</p>;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((p: any, i: number) => (
          <PokemonItem key={i} name={p.name} url={p.url} />
        ))}
      </div>

      <div className="text-center mt-6">
        <PaginationButton onClick={() => setLimit(limit + 30)} />
      </div>
    </div>
  );
}
