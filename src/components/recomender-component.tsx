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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-slate-200">
            {randomGame.name}
          </h2>
          <Image src={randomGame.imageSrc} width={700} height={400} alt="" />
          <p className="whitespace-normal text-slate-300 text-sm">
            {randomGame.summary}
          </p>
        </div>

        <ul className="list-disc pl-10 space-y-3">
          <li className="text-lg text-slate-200">
            pontuação: <LittleBetterText text="346.981" />
          </li>

          <li className="text-lg text-slate-200">
            plataformas: <LittleBetterText text="Xbox One" />{" "}
            <LittleBetterText text="Play Station 4" />{" "}
            <LittleBetterText text="pc" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center pb-4">
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none active:scale-98 mt-2"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
