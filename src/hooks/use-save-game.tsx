"use client";

import { useState, useCallback } from "react";

type SaveGamePayload = {
  gameId: number;
  score: number;
  hours_played: number;
  status: "is_playing" | "has_finished";
};

export function useSaveGame() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveGame = useCallback(async (data: SaveGamePayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar o jogo");
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    saveGame,
    isLoading,
    error,
  };
}
