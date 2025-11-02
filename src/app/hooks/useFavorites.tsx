//implementar useAddFavourite y use RemoveFavourite

"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavorite, removeFavorite, type AddFavoritePayload } from "@/app/services/favorites.services";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    // acepta un payload con { id, nameCustom?, description? }
    mutationFn: (payload: AddFavoritePayload) => addFavorite(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => removeFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
}
