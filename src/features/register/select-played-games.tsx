import Image from "next/image";

const games = [
  {
    name: "Dark Souls 3",
    id: 10,
    imageUrl:
      "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
  },
  {
    name: "Elden Ring",
    id: 12,
    imageUrl:
      "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
  },
  {
    name: "God of War 2",
    id: 13,
    imageUrl:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
  },
  {
    name: "The Witcher 3: Wild Hunt",
    id: 14,
    imageUrl:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  },
];

export function SelectPlayedGames() {
  return (
    <div className="flex flex-1 flex-col gap-6 px-5">
      {/* Search */}
      <div className="flex items-center justify-center gap-2">
        <p className="text-slate-300">Game Name:</p>
        <input
          type="search"
          className="rounded-md bg-slate-800 px-3 py-1 text-slate-200 outline-none ring-1 ring-slate-700 focus:ring-blue-600"
        />
      </div>

      {/* Games list */}
      <div
        className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          pr-1
          grid
          grid-cols-2
          gap-3
        "
      >
        {games.map((game) => {
          return (
            <div
              key={game.id}
              className="
                flex flex-col overflow-hidden
                rounded-xl
                border border-slate-800
                bg-slate-800/20
                transition
                hover:border-blue-600/60
              "
            >
              <Image
                src={game.imageUrl}
                width={360}
                height={480}
                alt={game.name}
                className="h-48 w-full object-cover"
              />

              <div className="flex items-center justify-center p-3">
                <p className="text-center text-slate-200 font-medium">
                  {game.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
