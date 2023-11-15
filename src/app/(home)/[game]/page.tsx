import { Metadata } from "next";
import { Game } from "@/src/api";
import { GameComponents } from "@/src/components/GameComponents";
import { Separator } from "@/src/components/Shared";
type GamePageProps = {
  params: {
    game: string;
  };
};

export const generateMetadata = async ({
  params,
}: GamePageProps): Promise<Metadata> => {
  const { game } = params;
  const gameController = new Game();
  const responseGame = await gameController.getGameBySlug(game);
  return {
    title: `${responseGame.attributes.title}`,
    description: `Información del juego: ${game}`,
  };
};
const getGame = async (slug: string) => {
  const gameController = new Game();
  const responseGame = await gameController.getGameBySlug(slug);
  return responseGame;
};
const GamePage = async ({ params }: GamePageProps) => {
  const game = await getGame(params.game);
  const {
    attributes: { wallpaper },
  } = game;
  return (
    <>
      <GameComponents.HeaderWallpaper
        image={wallpaper.data.attributes.url}
        width={wallpaper.data.attributes.width}
        height={wallpaper.data.attributes.height}
      />
      <GameComponents.Panel gameId={game.id} game={game.attributes} />
      <Separator height={50} />
      <GameComponents.Info game={game.attributes} />
      <Separator height={30} />
      <GameComponents.Media
        video={game.attributes.video}
        screenshots={game.attributes.screenshots.data}
      />
      <Separator height={50} />
    </>
  );
};

export default GamePage;
