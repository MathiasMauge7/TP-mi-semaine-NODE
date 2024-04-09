import express from "express";
import { getAllPlayers } from "../controllers/PlayerController";

const router = express.Router()

router.get('/', getAllPlayers);

export default router