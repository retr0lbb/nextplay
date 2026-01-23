import { api } from "@/lib/axios";
import { NextResponse } from "next/server";

interface LoginBodyDto {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: LoginBodyDto = await request.json();
  try {
    const { data } = await api.post("/auth/login", body);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Erro ao efetuar o login" },
      { status: 500 },
    );
  }
}
