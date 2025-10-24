import axios from "axios";

export default async function PokemonDetail({ params }: { params: { name: string } }) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = res.data;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-40 h-40 mb-4"
      />
      <p><strong>Tipos:</strong> 
      {pokemon.types.map((t: any) => t.type.name).join(", ")}
      </p>
      <a href="/" className="text-blue-600 hover:underline mt-4 block">
        ← Volver a la lista
      </a>
    </div>
  );
}
