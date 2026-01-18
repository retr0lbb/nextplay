import { SelectPlatformForm } from "@/features/register/select-plataforms-form";

export default function PlatformsPage() {
  // Simulando dados da API

  return (
    <main className="w-full min-h-screen bg-slate-950 flex flex-col">
      <div className="p-4 pt-8 pb-6">
        <h1 className="text-slate-200 text-xl sm:text-2xl font-bold">
          Add your gaming platforms below
        </h1>
      </div>

      <div className="flex flex-1">
        <SelectPlatformForm />
      </div>
    </main>
  );
}
