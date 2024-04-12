import path from "path";
import fs from "fs";
import { Game } from "../../domain/entities/Game";

export class GameRepository {
  private games: Game[] = [];
  private gamesFilePath = path.join(__dirname, "..", "data", "games.json");

  constructor() {}

  // On récupère tous les jeux inscrits dans le fichier games.json
  getAllGames(): Game[] {
    const data = fs.readFileSync(this.gamesFilePath, "utf-8");
    const games = JSON.parse(data);

    return games.map((game: Game) => {
      if (game.id) return game;
    });
  }

  // On récupère tous les jeux ayant le même id
  getGameById(id: string): Game[] | undefined {
    const games = this.getAllGames();
    return games.filter((game) => game.id === id);
  }
}
