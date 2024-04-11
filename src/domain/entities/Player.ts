import { Game } from "./Game";

export interface Player {
  id: string;
  pseudo: string;
  game: Game[];
}
