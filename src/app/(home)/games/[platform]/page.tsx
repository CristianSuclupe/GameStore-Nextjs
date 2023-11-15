import { Metadata } from "next";
import { PlatForms } from "@/src/components/PlatformComponents";
import { Platform, Game } from "@/src/api";

type PlatFormPageProps = {
  params: {
    platform: string;
  };
  searchParams: {
    page: number;
  };
};

export const generateMetadata = ({ params }: PlatFormPageProps): Metadata => {
  const { platform } = params;
  return {
    title: `Juegos de ${platform}`,
    description: `Todos los juegos disponibles de: ${platform}`,
  };
};

const getData = async (platform: string, page: number) => {
  const platformController = new Platform();
  const gameController = new Game();
  const responsePlatform = await platformController.getBySlug(platform);
  const responseGame = await gameController.getGameByPlatformSlug(
    platform,
    page
  );
  return {
    platform: responsePlatform,
    games: responseGame.data,
    pagination: responseGame.meta.pagination,
  };
};

const PlatFormPage = async ({ params, searchParams }: PlatFormPageProps) => {
  const { platform: selectedPlatform } = params;
  const { page: selectedPage = 1 } = searchParams;
  const { platform, games, pagination } = await getData(
    selectedPlatform,
    selectedPage
  );
  return (
    <PlatForms games={games} platform={platform} pagination={pagination} />
  );
};

export default PlatFormPage;
