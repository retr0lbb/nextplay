import { SelectPlayedGames } from "@/features/register/select-played-games";

export default function AddGamesPage() {
  return (
    <main className="flex h-svh w-full flex-col gap-4 bg-slate-950 py-6">
      <h1 className="px-4 text-2xl text-slate-200">Add your Games!!!</h1>

      <div className="flex flex-1 overflow-hidden">
        <SelectPlayedGames />
      </div>
    </main>
  );
}
