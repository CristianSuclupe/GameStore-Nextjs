import { Platform, Game } from "@/src/api";
import { number } from "yup";

type PlatFormPageProps = {
  params: {
    platform: string;
  };
  searchParams: {
    page: number;
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
    platform: responsePlatform.data,
    games: responseGame.data,
    pagination: responseGame.meta.pagination,
  };
};

const PlatFormPage = ({ params, searchParams }: PlatFormPageProps) => {
  const { platform } = params;
  const { page = 1 } = searchParams;
  const data = getData(platform, page);
  return <div>PlatFormPage</div>;
};

export default PlatFormPage;
