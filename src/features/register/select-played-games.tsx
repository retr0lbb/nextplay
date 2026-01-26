"use client";

import { GameDetailsModal } from "@/components/game-details-modal";
import { Loading } from "@/components/loading";
import { type GameObj, useFetchGames } from "@/hooks/use-fetch-games";
import { useInfiniteScroll } from "@/hooks/use-infinite-scoll";
import { useSaveGame } from "@/hooks/use-save-game";
import Image from "next/image";
import { useRef, useState } from "react";

export function SelectPlayedGames(props: { gameName: string }) {
  const parentRef = useRef(null);
  const [selectedGame, setSelectedGame] = useState<GameObj | null>(null);
  const saveGame = useSaveGame();

  const { games, isLoading, fetchNext, hasNext } = useFetchGames(
    props.gameName,
  );

  const { loadMoreRef } = useInfiniteScroll(
    () => {
      if (hasNext && !isLoading) {
        fetchNext();
      }

      if (!isLoading) {
        console.log("Sentinela ativo");
      }
    },
    hasNext,
    parentRef,
  );

  return (
    <>
      <div className="flex-1 overflow-y-auto relative" ref={parentRef}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {games.map((game) => (
            <button
              type="button"
              onClick={() => {
                setSelectedGame(game);
              }}
              key={game.id}
              className="flex flex-col active:opacity-50 gap-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-800/20 transition hover:border-blue-600/60"
            >
              <Image
                loading="eager"
                src={game.imageUrl}
                width={360}
                height={480}
                alt={game.name}
                className="h-48 w-full object-cover"
              />

              <div className="flex justify-center flex-1 py-4">
                <p className="text-center text-lg font-medium text-slate-200">
                  {game.name}
                </p>
              </div>
            </button>
          ))}

          {isLoading && (
            <div className="col-span-full flex justify-center py-4">
              <Loading />
            </div>
          )}
        </div>

        {/* sentinel do infinite scroll */}
        <div ref={loadMoreRef} className="h-10 w-full" />
      </div>
      {selectedGame && (
        <GameDetailsModal
          game={selectedGame}
          onClose={() => {
            setSelectedGame(null);
          }}
          onSave={async (d) => {
            try {
              await saveGame.saveGame({
                gameId: selectedGame.id,
                hours_played: d.hours_played as number,
                score: d.score as number,
                status: d.status,
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      )}
    </>
  );
}
