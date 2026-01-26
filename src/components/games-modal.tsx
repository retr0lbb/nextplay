"use client";

import { SelectPlayedGames } from "@/features/register/select-played-games";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useState } from "react";
import { X } from "lucide-react";

interface GamesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GamesModal(props: GamesModalProps) {
  const [gameName, setGameName] = useState("");
  const debouncedName = useDebounce<string>(gameName, 500);
  return (
    <div
      className={`absolute w-full h-full inset-0 p-4 gap-6 pt-10 bg-slate-900 flex items-center justify-center flex-col ${!props.isOpen && "hidden"}`}
    >
      <div className="w-full flex items-center justify-end px-4">
        <X className="text-slate-300 size-8" onClick={() => props.onClose()} />
      </div>
      <div className="flex w-full items-center gap-2">
        <Label className="text-xl text-slate-200">Pesquisa</Label>

        <Input
          className="text-slate-200"
          type="search"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </div>
      <div className="w-full h-full min-h-0 bg-slate-900 border border-white/10 overflow-y-hidden flex flex-col">
        <SelectPlayedGames gameName={debouncedName} />
      </div>
    </div>
  );
}
