import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import Image from "next/image";

const gameDetailsSchema = z.object({
  status: z.enum(["is_playing", "has_finished"]),
  score: z.coerce.number().int().max(100).min(0),
  hours_played: z.coerce.number().min(0),
});

type GameDetailsFormInput = z.input<typeof gameDetailsSchema>;

interface Game {
  id: number;
  name: string;
  imageUrl: string;
}

interface GameDetailsModalProps {
  game: Game;
  onClose: () => void;
  onSave: (data: GameDetailsFormInput) => void | Promise<void>;
}

export function GameDetailsModal({
  game,
  onClose,
  onSave,
}: GameDetailsModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GameDetailsFormInput>({
    resolver: zodResolver(gameDetailsSchema),
    defaultValues: {
      hours_played: 0,
      status: "is_playing",
      score: 0,
    },
  });

  const onSubmitHandler = async (data: GameDetailsFormInput) => {
    await onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <Image
            src={game.imageUrl}
            alt={game.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5 text-slate-200" />
          </button>

          <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
            {game.name}
          </h2>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-5">
          {/* Horas Jogadas */}
          <div>
            <label
              htmlFor="hours_played"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Horas Jogadas
            </label>
            <input
              type="number"
              {...register("hours_played")}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
            />
            {errors.hours_played && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.hours_played.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Status
            </label>
            <select
              {...register("status")}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="is_playing">Ainda estou jogando</option>
              <option value="has_finished">Ja finalizei</option>
            </select>
            {errors.status && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* Nota */}
          <div>
            <label
              htmlFor="score"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Nota (0-100)
            </label>
            <input
              type="number"
              step="0.5"
              min="0"
              max="10"
              {...register("score")}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: 56"
            />
            {errors.score && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.score.message}
              </p>
            )}
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit(onSubmitHandler)}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg font-medium transition"
            >
              {isSubmitting ? "Salvando..." : "Adicionar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
