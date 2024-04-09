import { Request, Response } from "express";
import { PlayerService } from "../../../domain/services/PlayerService";
import { response } from "../../../utils/response";

const playerService= new PlayerService

export const getAllPlayers = (req: Request, res: Response) => {
    const players = playerService.getAllPlayers()
    console.table(players)
    response(res, {
        statusCode: 200,
        message: 'OK',
        data: players
    })
}