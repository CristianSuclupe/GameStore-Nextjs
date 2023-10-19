import { GameAttributes } from "@/src/utils/types/gameType";
import styles from "./panel.module.scss";

type PanelProps = {
  gameId: number;
  game: GameAttributes;
};
export const Panel = ({ gameId, game }: PanelProps) => {
  console.log(gameId, game);
  return <div>panel</div>;
};
