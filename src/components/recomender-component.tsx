"use client";

import Image from "next/image";

const randomGame = {
  id: 38,
  name: "Dark Souls 3",
  summary: `Dark souls 3 é o terceiro jogo do grande produtor Hidetaka Miazaky, 
    explore um mundo dominado por caos e escuridão cuja o único objetivo é 
    sobreviver, será que o seu papel como ashen one sera trazer a paz ao mundo dominado 
    pelos vazios ou sera que voce trara a escuradão novamente ao mundo.`,
  imageSrc:
    "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
};

function LittleBetterText(props: { text: string }) {
  return (
    <span className="text-slate-300 py-1 px-2 bg-blue-500/20 rounded-full border border-white/10">
      {props.text}
    </span>
  );
}

export function GameRecommender() {
  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-5 space-y-6">
        {[randomGame, randomGame, randomGame].map((game, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <needless>
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-900/80 p-4"
          >
            <div className="flex gap-4">
              <Image
                src={game.imageSrc}
                width={120}
                height={160}
                alt=""
                className="rounded-lg object-cover shrink-0"
              />

              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-slate-200 leading-tight">
                  {game.name}
                </h2>

                <p className="text-sm text-slate-400 line-clamp-4">
                  {game.summary}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="text-sm text-slate-300 flex flex-wrap gap-2">
                pontuação:
                <LittleBetterText text="346.981" />
              </li>

              <li className="text-sm text-slate-300 flex flex-wrap gap-2">
                plataformas:
                <LittleBetterText text="Xbox One" />
                <LittleBetterText text="PS4" />
                <LittleBetterText text="PC" />
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 w-full border-t border-white/10 p-4">
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-semibold py-3.5 rounded-lg transition-all"
        >
          Salvar recomendações
        </button>
      </div>
    </div>
  );
}
