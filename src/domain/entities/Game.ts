import { Player } from './Player'

export interface Game {
    name: string;
    player: Player; // Référence vers l'entité Player
    rang: string;
}