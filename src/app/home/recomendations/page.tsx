import { RecomendationGameDropdown } from "@/components/recomendation-game-dropdown";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col flex-1 min-h-0 p-4 gap-2">
      <h1 className="text-slate-200 text-2xl mt-20">Recomendações salvas</h1>

      <div className="flex flex-1 overflow-y-scroll flex-col gap-2">
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
        <RecommendationGame
          img={{
            alt: "none",
            src: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
            height: 40,
            width: 150,
          }}
          name="Dark Souls 3"
          recScore="981.9"
          gameId={90}
        />
      </div>
    </div>
  );
}

interface RecommendationGameProps {
  img: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };

  name: string;
  gameId: number;
  recScore: string;
}
function RecommendationGame(props: RecommendationGameProps) {
  return (
    <div className="w-full border border-slate-200/10 bg-slate-900 flex items-center gap-4">
      <Image
        alt="s"
        height={props.img.height}
        width={props.img.width}
        src={props.img.src}
      />

      <div className="">
        <p className="text-slate-200 text-lg">{props.name}</p>
        <p className="text-sm text-slate-400">rec score: {props.recScore}</p>
      </div>

      <div className="flex flex-1 items-center justify-end mr-3">
        <RecomendationGameDropdown
          trigger={<BsThreeDotsVertical className="text-slate-300 size-7" />}
        />
      </div>
    </div>
  );
}
