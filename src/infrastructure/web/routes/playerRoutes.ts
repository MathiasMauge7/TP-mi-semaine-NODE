import express from "express";
import {
  getAllPlayers,
  getPlayerByPseudo,
  getPlayerByGame,
  getAllRanks,
} from "../controllers/PlayerController";

const router = express.Router();

router.get("/", getAllPlayers);
router.get("/ranks", getAllRanks);
router.get("/:pseudo", getPlayerByPseudo);
router.get("/games/:game", getPlayerByGame);

export default router;
