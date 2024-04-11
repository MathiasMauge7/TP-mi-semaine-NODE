import path from "path";
import fs from "fs"
import { Player } from "../../domain/entities/Player";

export class PlayerRepository {
    private players: Player[] = [];
    private filePath = path.join(__dirname, '..', 'data', 'players.json')

    constructor() {
    }

    getAllPlayers(): Player[] {
        const data = fs.readFileSync(this.filePath, 'utf-8')
        const players = JSON.parse(data)
        
        return players.map((player: Player) => {
            if (player.id) return player
        })
    }

    getPlayerByPseudo(playerPseudo: string): Player[] {
        const pseudos = this.getAllPlayers()
        return pseudos.filter(pseudo => pseudo.pseudo === playerPseudo)
    }

    getPlayersByGame(gameName: string): Player[] {
    const players = this.getAllPlayers();
    const playersWithGame: Player[] = [];

    for (const player of players) {
        for (const game of player.details) {
            if (game.name === gameName) {
                playersWithGame.push(player);
                break; // Sortez de la boucle interne une fois qu'un jeu correspondant est trouvé
            }
        }
    }
    return playersWithGame;
}
}