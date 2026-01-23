"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import axios from "axios";

const registrationFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha obrigatória"),
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

export function LoginForm() {
  const navigator = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegistrationFormData) {
    try {
      const { email, password } = data;

      const response = await axios.post(
        "http://localhost:3333/api/auth/login",
        { email, password },
      );

      if (response.status !== 200) {
        throw new Error("Error while doing the login");
      }

      localStorage.setItem("np-token", response.data.token);

      navigator.push("/home");
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4 py-8 px-2 bg-slate-900 rounded-lg"
    >
      <Field>
        <FieldLabel className="text-slate-200">Email</FieldLabel>
        <Input
          className="text-slate-200"
          type="email"
          placeholder="seu@email.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </Field>

      <Field>
        <FieldLabel className="text-slate-200">Senha</FieldLabel>
        <Input
          className="text-slate-200"
          type="password"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        )}
      </Field>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none active:scale-98 mt-2"
      >
        Enter
      </button>
    </form>
  );
}
