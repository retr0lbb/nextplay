import { Root } from "@/components/steps-form";

export default function RegisterPage() {
  return (
    <main className="w-full h-svh bg-slate-950">
      <div className="p-5 pt-10">
        <h1 className="text-slate-200 text-2xl">
          Ready to find the next game 4u?
        </h1>
      </div>

      <div className="flex flex-col px-4">
        <Root />
      </div>
    </main>
  );
}
