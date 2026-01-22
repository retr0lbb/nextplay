import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-svh bg-slate-950 flex items-center justify-center flex-col gap-4">
      <div className="w-full flex items-center justify-center p-4 flex-col gap-2">
        <h1 className="text-slate-200 font-semibold text-5xl">Next Play</h1>
        <p className="text-slate-400 mx-5 text-center">
          Encounter your next ?placeholder? to play.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 w-full">
        <Link href={"/auth/register"}>
          <button
            type="button"
            className="text-slate-200 text-xl px-4 py-1.5 
          border border-slate-200/20 rounded-lg bg-slate-200/10 
          hover:bg-slate-300/20 transition-all"
          >
            Register
          </button>
        </Link>
        <button
          type="button"
          className="text-slate-200 text-xl px-4 py-1.5 
          border border-slate-200/20 rounded-lg bg-slate-200/10 
          hover:bg-slate-300/20 transition-all"
        >
          Login
        </button>
      </div>

      <div className="w-full flex items-center justify-center px-5">
        <div className="w-full h-px bg-slate-400 rounded-xl" />
        <p className="text-slate-400 p-4">OR</p>
        <div className="w-full h-px bg-slate-400 rounded-xl" />
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-2">
        <button
          type="button"
          className="text-slate-200 text-xl px-4 py-1.5 flex items-center gap-2 
          border border-slate-200/20 rounded-lg bg-slate-200/10 
          hover:bg-slate-300/20 transition-all"
        >
          <FaGoogle /> <p>Login com google</p>
        </button>
      </div>
    </div>
  );
}
