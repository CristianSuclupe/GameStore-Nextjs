"use client";
import { useState, useEffect } from "react";
import { Game, GameData } from "@/src/api";
import { GridGames } from "../../Shared";

type LatestGamesProps = {
  title: string;
  limit?: number;
  platformId?: number;
};

const gameController = new Game();
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
  return (
    <div>
      <h2>{title}</h2>
      <GridGames games={games} />
    </div>
  );
};
