import { Game } from "../entities/Game";
import { GameRepository } from "../../infrastructure/repositories/GameRepository";

export class GameService {
  private gameRepository: GameRepository;

  constructor() {
    this.gameRepository = new GameRepository();
  }

  getAllGames(): Game[] {
    return this.gameRepository.getAllGames();
  }

  getGameById(id: string): Game[] | undefined {
    return this.gameRepository.getGameById(id);
  }
}
