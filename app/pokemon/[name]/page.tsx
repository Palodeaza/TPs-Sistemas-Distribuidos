import axios from "axios";
import Link from "next/link";

interface Props {
  params: { name: string };
}

export default async function PokemonDetailPage({ params }: Props) {
  const { name } = params;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = res.data;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-4 w-32 h-32"
      />

      <div className="mb-4">
        <h3 className="font-semibold">Tipos:</h3>
        <ul className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t: any) => (
            <li
              key={t.type.name}
              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm capitalize"
            >
              {t.type.name}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        ← Volver a la lista
      </Link>
    </div>
  );
}
