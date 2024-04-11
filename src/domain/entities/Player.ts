import { Game } from './Game'

export interface Player {
    id?: string;
    pseudo: string;
    details: Game[]; // Référence vers l'entité Game
}

