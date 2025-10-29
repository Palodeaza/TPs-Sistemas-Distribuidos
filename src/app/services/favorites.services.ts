//funciones add y remove
export async function addFavorite(id: number) {
  const res = await fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Error al agregar favorito");
  }

  return res.json();
}

export async function removeFavorite(id: number) {
  const res = await fetch(`/api/favorites/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Error al eliminar favorito");
  }

  return res.json();
}