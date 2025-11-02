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
    
    const { id, nameCustom, description } = await req.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "Debe especificarse un ID de Pokémon." },
        { status: 400 }
      );
    }

    // Obtenemos si ya existe en DB
    const existing = await db.getById(id);
    if (existing) {
      const updated = await db.update(id, {
        isFavorite: true,
        nameCustom,
        description,
      });
      return NextResponse.json(updated, { status: 200 });
    }

    // Si no existe, lo traemos de la API
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!apiRes.ok) {
      return NextResponse.json(
        { error: `No se encontró el Pokémon con ID ${id}.` },
        { status: 404 }
      );
    }

    const apiData = await apiRes.json();

    const newPokemon = {
      id: apiData.id,
      name: apiData.name,
      base_experience: apiData.base_experience,
      height: apiData.height,
      weight: apiData.weight,
      order: apiData.order,
      type1_name: apiData.types?.[0]?.type?.name || "unknown",
      isFavorite: true,
      nameCustom: nameCustom || "",
      description: description || "",
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
