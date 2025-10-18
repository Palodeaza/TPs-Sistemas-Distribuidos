"use client";
import Link from "next/link";

type Props = {
  name: string;
  url: string;
};

export default function PokemonItem({ name }: Props) {
  return (
    <Link href={`/pokemon/${name}`}>
      <div className="border rounded-lg p-4 text-center bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <h2 className="capitalize font-semibold">{name}</h2>
      </div>
    </Link>
  );
}
