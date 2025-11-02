"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAddFavorite, useRemoveFavorite } from "@/app/hooks/useFavorites";
import FavoriteModal from "./FavoriteModal";

type Props = {
  id: number;
  name: string;
  url?:string;
  isFavorite?: boolean;
};

export default function PokemonItem({ id, name, isFavorite = false }: Props) {
  const [favorito, setFavorito] = useState(isFavorite);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const addMutation = useAddFavorite();
  const removeMutation = useRemoveFavorite();

  useEffect(() => {
    setFavorito(isFavorite);
  }, [isFavorite]);

  const handleAddFavorite = async (values: { nameCustom: string; description: string }) => {
    setError(null);
    setIsLoading(true);
    try {
      await addMutation.mutateAsync({ 
        id, 
        nameCustom: values.nameCustom,
        description: values.description,
      });
      setFavorito(true);
    } catch (err) {
      setError("Error al agregar favorito");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError(null);
    setIsLoading(true);
    try {
      await removeMutation.mutateAsync(id);
      setFavorito(false);
    } catch (err) {
      setError("Error al eliminar favorito");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 text-center bg-blue-500 shadow-md hover:bg-gray-100 relative">
      <Link href={`/pokemon/${name}`}>
        <h2 className="capitalize font-semibold mb-2">{name}</h2>
      </Link>

      {favorito ? (
        <button
          onClick={handleRemoveFavorite}
          disabled={isLoading || removeMutation.isPending}
          className="mt-3 px-3 py-1 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-500"
        >
          {isLoading ? "Procesando..." : "Quitar de favoritos"}
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          disabled={isLoading}
          className="mt-3 px-3 py-1 rounded-md bg-gray-300 text-gray-800 font-semibold hover:bg-yellow-500"
        >
          Agregar a favoritos
        </button>
      )}

      {error && <p className="text-red-700 text-xs mt-2">{error}</p>}

      <FavoriteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleAddFavorite}
      />
    </div>
  );
}
