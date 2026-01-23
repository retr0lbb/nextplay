import { api } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await api.get("/games");
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao buscar jogos" },
      { status: 500 },
    );
  }
}
