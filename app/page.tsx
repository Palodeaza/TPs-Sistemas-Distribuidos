//import PokemonList from "./components/PokemonList";
import PokemonList from "./components/PokemonList";
console.log("DEBUG >>> PokemonList:", PokemonList)
export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Lista de Pokémons</h1>
      <PokemonList />
    </section>
  );
}
