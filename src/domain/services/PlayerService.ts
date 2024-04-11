import { Player } from "../entities/Player";
import { PlayerRepository } from "../../infrastructure/repositories/PlayerRepository";

export class PlayerService {
    private playersRepository: PlayerRepository;

    constructor() {
        this.playersRepository = new PlayerRepository()
    }

    getAllPlayers(): Player[] {
        return this.playersRepository.getAllPlayers()
    }

    // QUESTION !!!
    getPlayerByPseudo(pseudo: string): Player[] | undefined {
        return this.playersRepository.getPlayerByPseudo(pseudo);
    }

    getPlayersByGame(game: string): Player[] | undefined {
        return this.playersRepository.getPlayersByGame(game)
    }
}