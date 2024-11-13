import express, { IRouter, NextFunction } from "express";
import authController from "../src/controllers/authController"
import { verifyAdmin, verifyUser } from "../helpers/jwt";
import stoerController from "../src/controllers/storeController"

const router: IRouter = express.Router();

router.use("/auth", authController);
router.use("/store",stoerController);

export default router;
