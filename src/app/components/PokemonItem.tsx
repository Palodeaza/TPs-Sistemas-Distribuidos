"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAddFavorite, useRemoveFavorite } from "@/app/hooks/useFavorites";

type Props = {
  id: number;
  name: string;
  isFavorite?: boolean;
};

export default function PokemonItem({ id, name, isFavorite = false }: Props) {
  const [favorito, setFavorito] = useState(isFavorite);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const addMutation = useAddFavorite();
  const removeMutation = useRemoveFavorite();

  useEffect(() => {
    setFavorito(isFavorite);
  }, [isFavorite]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError(null);
    setIsLoading(true);

    const prev = favorito;
    setFavorito(!favorito); 

    try {
      if (prev) {
        await removeMutation.mutateAsync(id); 
      } else {
        await addMutation.mutateAsync(id); 
      }
    } catch (err: any) {
      console.error(err);
      setFavorito(prev); 
      setError("Error al actualizar favorito");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 text-center bg-blue-500 shadow-md transition hover:bg-gray-100 relative">
      <Link href={`/pokemon/${name}`}>
        <h2 className="capitalize font-semibold mb-2">{name}</h2>
        
      </Link>

      <button
        onClick={handleToggle}
        disabled={isLoading || addMutation.isPending || removeMutation.isPending}
        className={`mt-3 px-3 py-1 rounded-md text-sm font-semibold ${
          favorito ? "bg-yellow-400 text-black" : "bg-gray-300 text-gray-800"
        } ${isLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-500"}`}
      >
        {isLoading || addMutation.isPending || removeMutation.isPending
          ? "Procesando..."
          : favorito
          ? "⭐ Quitar de favoritos"
          : "☆ Agregar a favoritos"}
      </button>

      {error && <p className="text-red-700 text-xs mt-2">{error}</p>}
    </div>
  );
}
