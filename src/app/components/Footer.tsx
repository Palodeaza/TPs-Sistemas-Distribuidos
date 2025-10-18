"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-10">
      <p className="text-sm">
        Lista de Pokemons- actividad6
        <a
          href="https://pokeapi.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:underline"
        >
          PokeAPI
        </a>
      </p>
    </footer>
  );
}
