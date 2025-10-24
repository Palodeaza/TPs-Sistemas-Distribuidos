"use client";

import { useState } from "react";
import Link from "next/link";

interface PokemonItemProps {
  name: string;
  url: string; // opcional 
}

export default function PokemonItem({ name, url }: PokemonItemProps) {
  const [clicks, setClicks] = useState<number>(0);

  return (
    <Link
      href={`/pokemon/${name}`}
      onClick={() => setClicks((c) => c + 1)}
      className="bg-blue-600 rounded-xl shadow p-4 text-center hover:bg-blue-400 transition"
    >
      <h3 className="capitalize font-semibold text-lg">{name}</h3>
      <p className="text-sm text-white">Usado {clicks} veces</p>
    </Link>
  );
}
