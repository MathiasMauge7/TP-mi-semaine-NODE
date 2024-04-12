import { Player } from "./Player";

export interface Game {
  id?: string;
  name: string;
  ranks?: { [rank: string]: string };
  players?: Player[];
}
