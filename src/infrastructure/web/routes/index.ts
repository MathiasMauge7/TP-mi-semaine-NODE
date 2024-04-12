import express from "express";
import playerRoutes from "./playerRoutes";
import gameRoutes from "./gameRoutes";

const router = express.Router();

router.use("/players", playerRoutes);
router.use("/games", gameRoutes);

export default router;
