//implementar useAddFavourite y use RemoveFavourite
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavorite, removeFavorite } from "@/app/services/favorites.services";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => addFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => removeFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
}