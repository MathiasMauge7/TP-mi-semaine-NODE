import { Player } from "../entities/Player";
import { PlayerRepository } from "../../infrastructure/repositories/PlayerRepository";
import { Rank } from "../entities/Rank";

export class PlayerService {
  private playersRepository: PlayerRepository;

  constructor() {
    this.playersRepository = new PlayerRepository();
  }

  getAllPlayers(): Player[] {
    return this.playersRepository.getAllPlayers();
  }

  getPlayerByPseudo(pseudo: string): Player[] | undefined {
    return this.playersRepository.getPlayerByPseudo(pseudo);
  }

  getPlayerByGame(game: string): Player[] | undefined {
    return this.playersRepository.getPlayerByGame(game);
  }

  getAllRanks(): Rank[] {
    return this.playersRepository.getAllRanks();
  }

  createPlayer(player: Player) {
    return this.playersRepository.createPlayer(player);
  }
}
