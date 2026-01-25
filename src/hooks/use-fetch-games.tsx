"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface GameObj {
  id: number;
  name: string;
  imageUrl: string;
}

export function useFetchGames(gameName: string) {
  const [games, setGames] = useState<GameObj[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);

  const baseUrl = `https://api.rawg.io/api/games?search=${encodeURIComponent(
    gameName,
  )}&key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`;

  const fetchGame = useCallback(async (url: string) => {
    try {
      setIsLoading(true);

      const response = await axios.get(url);

      if (response.data.next !== null) {
        setNextUrl(response.data.next);
        setHasNext(true);
      }

      if (response.data.results && response.data.results.length > 0) {
        const games: GameObj[] = response.data.results.map(
          (game: { id: number; background_image: string; name: string }) => {
            return {
              id: game.id,
              imageUrl: game.background_image,
              name: game.name,
            } as GameObj;
          },
        );

        return games;
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    async function reallyGetGames() {
      const games = await fetchGame(baseUrl);

      if (!games) return;

      setGames(games);
    }
    reallyGetGames();
  }, [baseUrl, fetchGame]);

  const fetchNext = useCallback(async () => {
    if (nextUrl && hasNext) {
      const games = await fetchGame(nextUrl);

      if (!games) return;

      setGames((prev) => [...prev, ...games]);
    }
  }, [nextUrl, hasNext, fetchGame]);

  return { games, hasNext, isLoading, fetchNext };
}
