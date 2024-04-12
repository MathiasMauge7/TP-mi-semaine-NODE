import { Request, Response } from "express";
import { PlayerService } from "../../../domain/services/PlayerService";
import { response } from "../../../utils/response";
import env from "../../../config/env";
import bcrypt from "bcrypt";

import { AuthService } from "../../../domain/services/AuthService";

const playerService = new PlayerService();
const authService = new AuthService();

const { NODE_ENV } = env;

export const getAllPlayers = (req: Request, res: Response) => {
  const players = playerService.getAllPlayers();
  console.table(players);
  response(res, {
    statusCode: 200,
    message: "OK",
    data: players,
  });
};

export const getPlayerByPseudo = (req: Request, res: Response) => {
  const { pseudo } = req.params;
  const player = playerService.getPlayerByPseudo(pseudo);
  console.table(player);
  if (!player) {
    response(res, { statusCode: 404, message: "Player not found.." });
  } else {
    response(res, { statusCode: 200, message: "OK!", data: player });
  }
};

export const getPlayerByGame = (req: Request, res: Response) => {
  const { game } = req.params;
  const players = playerService.getPlayerByGame(game);
  console.table(players);
  response(res, { statusCode: 200, data: players, message: "OK" });
};

export const getAllRanks = (req: Request, res: Response) => {
  const ranks = playerService.getAllRanks();
  console.table(ranks);
  response(res, {
    statusCode: 200,
    message: "OK",
    data: ranks,
  });
};

export const login = async (req: Request, res: Response) => {
  try {
    const { pseudo, password } = req.body;

    // on récupére l'utilisateur avec l'username saisit dans le formulaire (req.body)
    const player = playerService.getPlayerByPseudo(pseudo);
    if (!player)
      return response(res, {
        statusCode: 401,
        message: "Authentication failed",
      });

    // On va comparer le mot de passe hashé (entre celui du formulaire et celui enregistré dans notre json)
    const isValid = await bcrypt.compare(password, player.password);
    if (!isValid)
      return response(res, {
        statusCode: 401,
        message: "Authentication failed",
      });

    // On crée notre accessToken qu'on stockera en cookie pour valider l'authentification
    const accessToken = authService.issueAccessToken(player.id as string);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
    });

    response(res, { statusCode: 200, message: "Authentication successful" });
  } catch (error) {
    console.error(error);
    response(res, { statusCode: 500, message: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { pseudo, password } = req.body;

    console.log(req.body);

    if (!pseudo?.trim() || !password?.trim())
      return response(res, {
        statusCode: 400,
        message: "Invalid username or password",
      });

    // Vérification de l'unicité du nom d'utilisateur saisit
    const existingUsername = playerService.getPlayerByPseudo(pseudo);
    if (existingUsername)
      return response(res, {
        statusCode: 409,
        message: "Username already exists",
      });

    // hashage du mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);

    playerService.createPlayer({ pseudo, password: hashedPassword });
    response(res, { statusCode: 201, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    response(res, { statusCode: 500, message: "Internal server error" });
  }
};
