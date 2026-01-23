import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { UserDropDownMenu } from "@/components/user-dropdown-menu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-svh flex flex-col relative bg-slate-950">
      <UserDropDownMenu
        trigger={
          <div className="absolute top-5 left-5 size-14 bg-slate-800 border border-slate-100/20 rounded-full grid place-items-center">
            <FaUser className="text-slate-200 size-6" />
          </div>
        }
      />
      {children}
      <footer className="w-full py-3 px-4 border-t border-slate-700 bg-slate-900">
        <nav className="flex items-center justify-around gap-4">
          <div className="flex flex-1 py-2 items-center justify-around">
            <Link
              href={"/home"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <IoMdHome className="size-8" />
              <p className="text-slate-200 text-sm">home</p>
            </Link>

            <Link
              href={"/"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <MdGamepad className="size-8" />
              <p className="text-slate-200 text-sm">games</p>
            </Link>

            <Link
              href={"/"}
              className="text-slate-200 flex flex-col items-center justify-center"
            >
              <RiComputerFill className="size-8" />
              <p className="text-slate-200 text-sm">platforms</p>
            </Link>

            <Link
              href={"/home/recomendations"}
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
