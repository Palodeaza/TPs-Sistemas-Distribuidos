"use client";
import { useState } from "react";

type Props = {
  name: string;
  attack: number;
  defense: number;
  sprite:string;
  hp:number;

};

export default function PokemonItem({ name, hp, attack, defense, sprite }: Props) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="border rounded p-10 m-6 bg-gray-400 hover:bg-gray-600 flex items-center w-80 space-y-1"
    >
      {sprite && <img src={sprite} alt={name} className="w-20 h-20 mr-4" />}
      <div className="flex flex-col justify-between flex-1">
       <p><strong className="text-blue-500">Nombre:</strong> {name}</p>
       <p><strong className="text-yellow-200"> HP:</strong> {hp}</p>
       <p><strong className="text-red-200"> Attack:</strong> {attack}</p>
       <p><strong className="text-green-200"> Defense:</strong> {defense}</p>
       <p><strong className="text-blue-500">Veces usado:</strong> {count}</p>
      </div>
    </button>
  );
}