"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const registrationFormSchema = z.object({
  userName: z.string(),
  email: z.email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof registrationFormSchema>>({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
    resolver: zodResolver(registrationFormSchema),
  });

  function handleFormSubmit(data: z.infer<typeof registrationFormSchema>) {
    console.log(data);
    reset();
  }

  return (
    <form
      className="flex-1 px-4 pb-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="bg-slate-900 rounded-xl p-5 shadow-xl max-w-2xl mx-auto">
        <div className="space-y-5">
          {/* Campo de Nome de Usuário */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-slate-200 font-medium text-sm"
            >
              Nome de Usuário
            </label>
            <input
              id="username"
              type="text"
              {...register("userName", {
                required: "Nome de usuário é obrigatório",
                minLength: {
                  value: 3,
                  message: "Nome deve ter pelo menos 3 caracteres",
                },
              })}
              placeholder="Digite seu nome de usuário"
              className="bg-slate-800 text-slate-200 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
            />
            {errors.userName && (
              <span className="text-red-400 text-sm">
                {errors.userName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-slate-200 font-medium text-sm"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email eh obrigatório",
              })}
              placeholder="Enter your email address"
              className="bg-slate-800 text-slate-200 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-slate-200 font-medium text-sm"
            >
              password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is necessary",
              })}
              placeholder="Enter you password"
              className="bg-slate-800 text-slate-200 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
            />
            {errors.password && (
              <span className="text-red-400 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-slate-200 font-medium text-sm"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "",
              })}
              placeholder="Enter your password again"
              className="bg-slate-800 text-slate-200 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
            />
            {errors.confirmPassword && (
              <span className="text-red-400 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none active:scale-98 mt-2"
          >
            Create account
          </button>
        </div>
      </div>
    </form>
  );
}
