import PokemonList from './components/PokemonList';

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Lista de Pokémons
      </h1>
      <PokemonList />
    </section>
  );
}
