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
    <form className="columns-2 space-y-4">
      {platforms.map((plat) => {
        return (
          <div
            key={plat.id}
            className="relative flex items-center justify-center p-4 border border-slate-400 rounded-lg 
            group-target:bg-blue-700/50"
          >
            <input
              className="inset-0 absolute z-10 opacity-100 group"
              type="checkbox"
              name="platform"
              id={plat.id.toString()}
              value={plat.id}
            />
            <p className="text-slate-200">{plat.name}</p>
          </div>
        );
      })}
    </form>
  );
}
