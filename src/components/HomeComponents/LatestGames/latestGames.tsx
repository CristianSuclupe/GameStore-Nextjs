"use client";
import { useState, useEffect } from "react";
import { Game, GameData } from "@/src/api";

type LatestGamesProps = {
  title: string;
  limit?: number;
  platformId?: string;
};

const gameController = new Game();
const PLATAFORM_ID = "";
export const LatestGames = ({ title, limit, platformId }: LatestGamesProps) => {
  const [games, setGames] = useState<GameData[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await gameController.getLatestPublished({
          limit,
          platformId,
        });
        setGames(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!games) return null;
  console.log(games);
  return <div>latestGames</div>;
};
