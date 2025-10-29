import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

interface Params {
  params: { id: string };
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    const numId = Number(id);

    if (isNaN(numId)) {
      return NextResponse.json(
        { error: "El ID debe ser un número válido." },
        { status: 400 }
      );
    }

    const pokemon = await db.getById(numId);
    if (!pokemon) {
      return NextResponse.json(
        { error: "Pokémon no encontrado." },
        { status: 404 }
      );
    }

    if (!pokemon.isFavorite) {
      return NextResponse.json(
        { error: "El Pokémon no está en favoritos." },
        { status: 409 }
      );
    }

    await db.update(numId, { isFavorite: false });

    return NextResponse.json(
      { message: "Pokémon eliminado de favoritos correctamente.", id: numId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error de DELETE /api/favorites/[id]:", error);
    return NextResponse.json(
      { error: "Error interno al eliminar favorito." },
      { status: 500 }
    );
  }
}
