"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from './PokemonItem';

type PokemonBasic = {
  name: string;
  url: string;
};

type PokemonData={
  name:string;
  hp:number;
  attack: number;
  defense: number;
  sprite: string;
  
}

export default function ListaPokemon() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const basicPokemons: PokemonBasic[] = res.data.results;

        const requests = basicPokemons.map((p) => axios.get(p.url));
        const responses = await Promise.all(requests);

        const data: PokemonData[] = responses.map((r) => {
          const p = r.data;
          const hp = p.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 0;
          const attack = p.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 0;
          const defense = p.stats.find((s: any) => s.stat.name === "defense")?.base_stat || 0;
          const sprite = p.sprites.front_default;

          return { name: p.name, hp, attack, defense, sprite };
        });

        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemones:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Listado de Pokémons</h1>
      <div className="flex flex-wrap">
        {pokemons.map((p) => (
          <PokemonItem
            key={p.name}
            name={p.name}
            hp={p.hp}
            attack={p.attack}
            defense={p.defense}
            sprite={p.sprite}
          />
        ))}
      </div>
    </div>
  );
}
