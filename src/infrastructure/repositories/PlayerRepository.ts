import path from "path";
import fs from "fs"
import { Player } from "../../domain/entities/Player";
import { Game } from "../../domain/entities/Game";

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

    getPlayerByPseudo(playerPseudo: string): Player | undefined {
        const pseudos = this.getAllPlayers()
        let result: any = []
        pseudos.find(pseudo => pseudo.pseudo === playerPseudo)
        return result
    }

    getPlayersByGame(game: string): Player[] {
        const players = this.getAllPlayers()
        return players.filter(player => player.game === game)
    }
}