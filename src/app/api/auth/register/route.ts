import { api } from "@/lib/axios";
import { NextResponse } from "next/server";

interface RegisterFormDto {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RegisterFormDto = await request.json();
  try {
    const { data } = await api.post("/auth/register", body);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Erro ao efetuar registro" },
      { status: 500 },
    );
  }
}
