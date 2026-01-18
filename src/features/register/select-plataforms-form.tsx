const platforms = [
  {
    id: 1,
    name: "Play Station 4",
  },
  {
    id: 2,
    name: "Play Station 3",
  },
  {
    id: 3,
    name: "XBox 360",
  },
  {
    id: 4,
    name: "XBox One",
  },
];

export function SelectPlatformForm() {
  return (
    <form className="flex flex-col pb-16 px-5 gap-2 justify-center">
      <div className="flex flex-1 flex-wrap content-center justify-center gap-2 overflow-x-hidden overflow-y-auto">
        {platforms.map((plat) => {
          return (
            <div
              key={plat.id}
              className="relative flex items-center justify-center p-4 border border-slate-400 rounded-lg 
                has-[input:checked]:bg-blue-600/40 has-[input:checked]:border-blue-900 transition-all
            "
            >
              <input
                className="inset-0 absolute z-10 opacity-0 group"
                type="checkbox"
                name="platform"
                id={plat.id.toString()}
                value={plat.id}
              />
              <p className="text-slate-200">{plat.name}</p>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none active:scale-98 mt-2"
      >
        Finish
      </button>
    </form>
  );
}
