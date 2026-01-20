"use client";

import { useEffect, useState } from "react";

interface FetchGamesProps {
  gameName?: string;
}

export interface GameResult {
  name: string;
  id: number;
  imageUrl: string;
}

export function useFetchGames({ gameName = "" }: FetchGamesProps) {
  const [games, setGames] = useState<GameResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      try {
        setLoading(true);
        console.log("rodando");
        setError(null);

        const response = await fetch(
          `https://api.rawg.io/api/games?search=${encodeURIComponent(
            gameName,
          )}&key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar jogos");
        }

        const data = await response.json();

        const formattedGames: GameResult[] = data.results.map((game: any) => ({
          id: game.id,
          name: game.name,
          imageUrl: game.background_image,
        }));

        setGames(formattedGames);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message ?? "Erro inesperado");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchGames();

    return () => controller.abort();
  }, [gameName]);

  return {
    games,
    loading,
    error,
  };
}
