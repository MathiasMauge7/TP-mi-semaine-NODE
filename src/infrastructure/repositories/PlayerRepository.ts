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
}