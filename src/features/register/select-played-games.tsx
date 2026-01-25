"use client";

import { Loading } from "@/components/loading";
import { useDebounce } from "@/hooks/use-debounce";
import { useFetchGames } from "@/hooks/use-fetch-games";
import { useInfiniteScroll } from "@/hooks/use-infinite-scoll";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function SelectPlayedGames() {
  const [gameName, setGameName] = useState("");
  const debouncedName = useDebounce<string>(gameName, 500);
  const parentRef = useRef(null);

  const { games, isLoading, fetchNext, hasNext } = useFetchGames(debouncedName);

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
    <div className="flex-1 overflow-y-auto relative" ref={parentRef}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col gap-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-800/20 transition hover:border-blue-600/60"
          >
            <Image
              loading="eager"
              src={game.imageUrl}
              width={360}
              height={480}
              alt={game.name}
              className="h-48 w-full object-cover"
            />

            <div className="flex justify-center flex-1 pt-2">
              <p className="text-center text-lg font-medium text-slate-200">
                {game.name}
              </p>
            </div>

            <div className="flex items-center justify-center border-t border-slate-800 bg-blue-600/10 pb-2 text-2xl text-slate-200 hover:opacity-70 active:opacity-60">
              +
            </div>
          </div>
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
  );
}
