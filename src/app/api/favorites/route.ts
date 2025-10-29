import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

export async function GET() {
  try {
    const all = await db.getAll();
    const favorites = all.filter((p) => p.isFavorite);
    return NextResponse.json(favorites, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/favorites:", error);
    return NextResponse.json(
      { error: "Error al obtener los favoritos." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Debe especificarse un ID de Pokémon." },
        { status: 400 }
      );
    }

   
    const existing = await db.getById(id);
    if (existing) {
      const updated = await db.update(id, { isFavorite: true });
      return NextResponse.json(updated, { status: 200 });
    }

    
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!apiRes.ok) {
      return NextResponse.json(
        { error: `No se encontró el Pokémon con ID ${id}.` },
        { status: 404 }
      );
    }

    const apiData = await apiRes.json();

    
    if (!apiData.name || !apiData.height) {
      return NextResponse.json(
        { error: "Respuesta inesperada de la PokéAPI." },
        { status: 500 }
      );
    }

    
    const newPokemon = {
      id:apiData.id,
      name: apiData.name,
      base_experience: apiData.base_experience,
      height: apiData.height,
      weight: apiData.weight,
      order: apiData.order,
      type1_name: apiData.types?.[0]?.type?.name || "unknown",
      isFavorite: true,
    };

    
    const created = await db.create(newPokemon);

    return NextResponse.json(created, { status: 201 });

  } catch (error) {
    console.error("Error en POST /api/favorites:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
