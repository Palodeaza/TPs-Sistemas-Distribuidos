//funciones add y remove
export type AddFavoritePayload ={
  id:number;
  nameCustom?: string;
  description?: string;
}
export async function addFavorite(payload: AddFavoritePayload) {
  const res = await fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let message = "Error al agregar favorito";
    try {
      const json = JSON.parse(text || "{}");
      message = json.error || message;
    } catch {
      // response no JSON
    }
    throw new Error(message);
  }

  return res.json();
}

export async function removeFavorite(id: number) {
  const res = await fetch(`/api/favorites/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let message = "Error al eliminar favorito";
    try {
      const json = JSON.parse(text || "{}");
      message = json.error || message;
    } catch {}
    throw new Error(message);
  }

  return res.json();
}
