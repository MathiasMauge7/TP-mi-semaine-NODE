import path from "path";
import fs from "fs";
import { Player } from "../../domain/entities/Player";
import { Rank } from "../../domain/entities/Rank";

export class PlayerRepository {
  private players: Player[] = [];
  private ranks: Rank[] = [];
  private playersFilePath = path.join(__dirname, "..", "data", "players.json");
  private ranksFilePath = path.join(__dirname, "..", "data", "ranks.json");

  constructor() {}

  // On récupère tous les joueurs du fichiers players.json
  getAllPlayers(): Player[] {
    const data = fs.readFileSync(this.playersFilePath, "utf-8");
    const players = JSON.parse(data);

    return players.map((player: Player) => {
      if (player.id) return player;
    });
  }

  // On récupère un joueur par son pseudo
  getPlayerByPseudo(playerPseudo: string): Player[] {
    const pseudos = this.getAllPlayers();
    return pseudos.filter((pseudo) => pseudo.pseudo === playerPseudo);
  }

  // On récupère tous les joueurs jouant à un même jeu
  getPlayerByGame(game: string): Player[] | undefined {
    const players = this.getAllPlayers();
    return players.filter((player) => player.game === game);
  }

  // On récupère tous les rangs du fichier ranks.json
  getAllRanks(): Rank[] {
    const data = fs.readFileSync(this.ranksFilePath, "utf-8");
    const ranks = JSON.parse(data);

    return ranks.map((rank: Rank) => {
      if (rank.id) return rank;
    });
  }
  // On augmente de rang un joueur qui n'est pas au rang maximal en comparant son rang au tableau des rangs
  // updatePlayerRank(playerId: string): void {
  //   const players = this.getAllPlayers();
  //   const ranks = this.getAllRanks();

  //   const updatedPlayers = players.map((player: Player) => {
  //     if (player.id === playerId) {
  //       const currentRank = ranks.find((rank) => rank.id === player.rankId);
  //       const currentIndex = ranks.findIndex(
  //         (rank) => rank.id === currentRank?.id
  //       );
  //       if (currentIndex !== -1 && currentIndex < ranks.length - 1) {
  //         const newRank = ranks[currentIndex + 1];
  //         if (newRank && newRank !== undefined) {
  //           player.rankId = newRank.id;
  //           player.rankId = newRank.rank;
  //         }
  //       }
  //     }
  //     return player;
  //   });

  //   const updatedData = JSON.stringify(updatedPlayers, null, 2);
  //   fs.writeFileSync(this.playersFilePath, updatedData);
  // }

  // On créer un nouveau joueur dans le fichier players.json
  // createPlayer(player: Player) {
  //   const players = this.getAllPlayers();

  //   players.push({
  //     ...player,
  //     id: crypto.randomUUID(),
  //   });

  //   fs.writeFileSync(this.playersFilePath, JSON.stringify(players, null, 2));
  // }
}
