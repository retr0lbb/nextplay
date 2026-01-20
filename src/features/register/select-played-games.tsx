"use client";

import { Loading } from "@/components/loading";
import { useFetchGames } from "@/hooks/use-fetch-games";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SelectPlayedGames() {
  const [gameName, setGameName] = useState("");
  const [debouncedGameName, setDebouncedGameName] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedGameName(gameName);
    }, 500);

    return () => clearTimeout(timeout);
  }, [gameName]);

  const { games, error, loading } = useFetchGames({
    gameName: debouncedGameName,
  });

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  return (
    <div className="flex flex-1 flex-col gap-6 px-5">
      <div className="flex items-center justify-center gap-2">
        <p className="text-slate-300">Game Name:</p>
        <input
          type="search"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="rounded-md bg-slate-800 px-3 py-1 text-slate-200 outline-none ring-1 ring-slate-700 focus:ring-blue-600"
        />
      </div>

      <div className="flex-1 columns-2 space-y-3 overflow-y-auto relative">
        {!loading ? (
          games.map((game) => (
            <div
              key={game.id}
              className="flex flex-col gap-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-800/20 transition hover:border-blue-600/60"
            >
              <Image
                src={game.imageUrl}
                width={360}
                height={480}
                alt={game.name}
                className="h-48 w-full object-cover"
              />

              <div className="flex justify-center pt-2">
                <p className="text-center text-lg font-medium text-slate-200">
                  {game.name}
                </p>
              </div>

              <div className="flex items-center justify-center border-t border-slate-800 bg-blue-600/10 pb-2 text-2xl text-slate-200 hover:opacity-70 active:opacity-60">
                +
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
