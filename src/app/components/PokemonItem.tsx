"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

type Props = {
  name: string;
  url: string;
};

export default function PokemonItem({ name }: Props) {
  const [clicks, setClicks]= useState(0);

  useEffect(()=> {
    const guardar=localStorage.getItem('clicks-${name}');
    if (guardar) setClicks(parseInt(guardar));
  }, [name]);

  const handleClick =()=>{
    const newClicks= clicks + 1;
    setClicks(newClicks);
    localStorage.setItem('clicks-${name}', newClicks.toString());
  }

  return (
    <Link href={`/pokemon/${name}`}>
      <div className="border rounded-lg p-4 text-center bg-blue-500 hover:bg-gray-200 cursor-pointer">
        <h2 className="capitalize font-semibold">{name}</h2>
      </div>
    </Link>
  );
}
