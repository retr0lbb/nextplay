import { api } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await api.get("/games");
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Erro ao buscar jogos" },
      { status: 500 },
    );
  }
}

interface CreateGameDto {
  gameId: string;
  score: number;
  hours_played: number;
  status: "is_playing" | "has_finished";
}
export async function POST(request: Request) {
  const body: CreateGameDto = await request.json();
  console.log(body);

  try {
    if (!body.gameId) {
      throw new Error("GameId Required");
    }
    const response = await api.post(`/games/import/rawg/${body.gameId}`);

    if (response.status !== 201) {
      throw new Error("Error importing game");
    }

    const secondResponse = await api.post("/player/game", {
      gameId: body.gameId,
      status: body.status,
      score: body.score,
      hours_played: body.hours_played,
    });

    console.log(secondResponse);

    return { data: secondResponse.data };
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao buscar jogos", err: error },
      { status: 500 },
    );
  }
}
