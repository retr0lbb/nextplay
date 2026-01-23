import { LoginForm } from "@/features/login/login-form";

export default function LoginPage() {
  return (
    <div className="w-full h-svh flex flex-col bg-slate-950">
      <div className="flex flex-col p-3 gap-2">
        <h1 className="text-slate-200 text-4xl">Login</h1>
        <p className="text-slate-400 text-lg">It is Good to see you again</p>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <LoginForm />
      </div>
    </div>
  );
}
