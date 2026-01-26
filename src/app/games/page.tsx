"use client";
import { GamesModal } from "@/components/games-modal";
import { Button } from "@/components/ui/button";

export default function AddGamesPage() {
  return (
    <main className="flex h-svh w-full flex-col gap-4 bg-slate-950 py-6 relative">
      <h1 className="px-4 text-2xl text-slate-200">Your Game List:</h1>
      <div className="px-7">
        <Button variant={"secondary"} size="lg">
          Add games
        </Button>
      </div>
      <GamesModal onClose={() => {}} />
    </main>
  );
}
