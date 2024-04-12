import { Request, Response } from "express";
import { GameService } from "../../../domain/services/GameService";
import { response } from "../../../utils/response";

const gameService = new GameService();

// On renvoie un tableau avec tous les jeux
export const getAllGames = (req: Request, res: Response) => {
  const games = gameService.getAllGames();
  console.table(games);
  response(res, {
    statusCode: 200,
    message: "OK",
    data: games,
  });
};

// On renvoie le jeu correspondant à l'id recherché
export const getGameById = (req: Request, res: Response) => {
  const { id } = req.params;
  const games = gameService.getGameById(id);
  console.table(games);
  response(res, { statusCode: 200, data: games, message: "OK" });
};
