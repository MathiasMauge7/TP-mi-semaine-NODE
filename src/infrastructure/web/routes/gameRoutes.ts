import express from "express";
import { getAllGames, getGameById } from "../controllers/GameController";

const router = express.Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);

export default router;
