import express, { IRouter, Request, Response } from "express";
import { buyNewMissille, getAllMissile } from "../services/storeService";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const all = await getAllMissile();
    res.json(all);
  } catch (error: any) {
    console.error(error.message);
  }
});

router.patch("/buy/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const idUser = req.params.id;
    const userBuy= req.body;
    
    const user = await buyNewMissille(userBuy);
    
    res.json(user);
  } catch (error: any) {
    console.error(error.message);
  }
});

export default router;
