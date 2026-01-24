import { SelectPlayedGames } from "@/features/register/select-played-games";
import { Button } from "./ui/button";

interface GamesModalProps {
  onClose: () => void;
}

export function GamesModal() {
  return (
    <div className="absolute w-full h-full inset-0 p-2 flex items-center justify-center bg-red-400">
      <div className="w-full h-full min-h-0 bg-slate-900 border border-white/10 overflow-y-scroll flex flex-col">
        <SelectPlayedGames />
      </div>
    </div>
  );
}
