"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";
import LoadingSkeleton from "./LoadingSkeleton";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        setPokemons(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  if (loading) return <LoadingSkeleton count={6} />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {pokemons.map((p) => (
        <PokemonItem key={p.name} name={p.name} url={p.url} />
      ))}
    </div>
  );
}
