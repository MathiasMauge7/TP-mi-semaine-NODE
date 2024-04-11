import express from "express";
import { getAllPlayers, getPlayerByPseudo, getPlayersByGame } from "../controllers/PlayerController";

const router = express.Router()

router.get('/', getAllPlayers);
router.get('/:pseudo', getPlayerByPseudo);
router.get('/games/:game', getPlayersByGame);

export default router