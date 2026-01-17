import { RegisterForm } from "@/features/register/register-form";

export default function RegisterPage() {
  // Simulando dados da API

  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col">
      <div className="p-4 pt-8 pb-6">
        <h1 className="text-slate-200 text-xl sm:text-2xl font-bold">
          Ready to find the next game 4u?
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-1">
          Crie sua conta e comece a jogar
        </p>
      </div>

      <RegisterForm />
    </main>
  );
}
