import { Request, Response } from "express";
import { PlayerService } from "../../../domain/services/PlayerService";
import { response } from "../../../utils/response";

const playerService = new PlayerService()

export const getAllPlayers = (req: Request, res: Response) => {
    const players = playerService.getAllPlayers()
    console.table(players)
    response(res, {
        statusCode: 200,
        message: 'OK',
        data: players
    })
}

export const getPlayerByPseudo = (req : Request, res: Response) => {
    const { pseudo } = req.params;
    const player = playerService.getPlayerByPseudo(pseudo);
    console.table(player);
    if(!player) {
        response(res, {statusCode: 404, message: 'Player not found..'})
    } else {
        response(res, { statusCode: 200, message: 'OK!', data: player});
    }
}

export const getPlayersByGame = (req: Request, res: Response) => {
    const { game } = req.params;
    const players = playerService.getPlayersByGame(game);
    console.table(players);
    if(players?.length === 0) {
        response(res, {statusCode: 404, message: 'Players not found..'})
    } else {
        response(res, { statusCode: 200, message: 'OK!', data: players});
    }
}