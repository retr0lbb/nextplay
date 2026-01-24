"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface FetchGamesProps {
  gameName?: string;
}

export interface GameResult {
  name: string;
  id: number;
  imageUrl: string;
}

interface UseFetchGamesReturn {
  next: string;
  hasNext: boolean;
  games: GameResult[];
  isLoading: boolean;
  hasError: boolean;
  fetchNextPage: (url: string) => void;
}

export function useFetchGames({ gameName = "" }: FetchGamesProps) {
  const [games, setGames] = useState<GameResult[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isFetchingRef = useRef(false);

  const fetchGames = useCallback(async (url: string, append = false) => {
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();

      const formatted: GameResult[] = data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        imageUrl: game.background_image,
      }));

      setGames((prev) => (append ? [...prev, ...formatted] : formatted));
      setNextUrl(data.next);
    } catch (error: any) {
      setError(error.message ?? "Erro inesperado");
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(
      gameName,
    )}&key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`;

    setGames([]);
    setNextUrl(null);

    fetchGames(url, false);
  }, [gameName, fetchGames]);

  const fetchNextPage = useCallback(
    (url: string | null) => {
      if (!url || loading || isFetchingRef.current) return;
      fetchGames(url, true);
    },
    [loading, fetchGames],
  );

  return {
    games,
    isLoading: loading,
    hasError: error ?? false,
    fetchNextPage: fetchNextPage,
    next: nextUrl,
    hasNext: Boolean(nextUrl),
  } as UseFetchGamesReturn;
}
