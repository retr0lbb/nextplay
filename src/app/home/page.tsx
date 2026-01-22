import { FaUser } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full h-svh bg-slate-950 flex flex-col relative">
      <div className="absolute top-5 left-5 size-14 bg-slate-800 border border-slate-100/20 rounded-full grid place-items-center">
        <FaUser className="text-slate-200 size-6" />
      </div>
      <div className="flex flex-1 p-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <button
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
      <footer className="w-full py-3 px-4 border-t border-slate-700 bg-slate-900">
        <nav className="flex items-center justify-around gap-4">
          <div className="flex flex-1 py-2 items-center justify-around">
            <Link
              href={"/"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <MdGamepad className="size-8" />
              <p className="text-slate-200 text-sm">Games</p>
            </Link>

            <Link
              href={"/"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <RiComputerFill className="size-8" />
              <p className="text-slate-200 text-sm">platforms</p>
            </Link>

            <Link
              href={"/"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <PiGraphFill className="size-8" />
              <p className="text-slate-200 text-sm">suggestion</p>
            </Link>
          </div>
        </nav>
      </footer>
    </main>
  );
}
