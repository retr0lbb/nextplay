"use client";

import { IoMdClose } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { useState } from "react";
import { GameRecommender } from "@/components/recomender-component";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute inset-0 w-full h-full p-6 z-10 ${isModalOpen ? "block" : "hidden"} min-h-0`}
      >
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-slate-900 rounded-lg border border-slate-100/20 p-4 min-h-0">
          <div className="flex items-center w-full justify-end ">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="p-3"
            >
              <IoMdClose className="size-10 text-slate-500" />
            </button>
          </div>

          <div className="flex flex-1 min-h-0">
            <GameRecommender />
          </div>
        </div>
      </div>

      <div className="flex flex-1 p-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="size-56 rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.5)]"
            >
              <IoGameController className="size-24 text-slate-50" />
            </button>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-100">
                Descubra seu próximo jogo
              </h1>
              <p className="text-slate-400 mt-1">
                Toque no botão e receba uma recomendação
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
