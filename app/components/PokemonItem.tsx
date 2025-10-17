"use client";

import { useState } from "react";
import Link from "next/link";

export default function PokemonItem({ name }: { name: string }) {
  const [clicks, setClicks] = useState(0);

  return (
    <Link
      href={`/pokemon/${name}`}
      onClick={() => setClicks(clicks + 1)}
      className="bg-white rounded-xl shadow p-4 text-center hover:bg-blue-50 transition"
    >
      <h3 className="capitalize font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">Usado {clicks} veces</p>
    </Link>
  );
}
