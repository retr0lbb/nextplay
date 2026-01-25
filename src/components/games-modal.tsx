import { SelectPlayedGames } from "@/features/register/select-played-games";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface GamesModalProps {
  onClose: () => void;
}

export function GamesModal() {
  return (
    <div className="absolute w-full h-full inset-0 p-4 gap-6 pt-10 bg-slate-900 flex items-center justify-center flex-col">
      <div className="flex w-full items-center gap-2">
        <Label className="text-xl text-slate-200">Pesquisa</Label>

        <Input className="text-slate-200" type="search" />
      </div>
      <div className="w-full h-full min-h-0 bg-slate-900 border border-white/10 overflow-y-scroll flex flex-col">
        <SelectPlayedGames />
      </div>
    </div>
  );
}
