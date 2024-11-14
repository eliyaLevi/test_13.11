import express, { IRouter, Request, Response } from "express";
import { buyNewMissille, getAllMissile } from "../services/storeService";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const all = await getAllMissile();
    console.log("--------------",all);
    
    res.json(all);
  } catch (error: any) {
    console.error(error.message);
  }
});

router.patch("/buy/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const idUser  = req.params;// מקבל איידי של יוזר
    const buy = req.body; // מקבל שם וכמות של נשק
   
    
    
    
    const user = await buyNewMissille(buy,idUser);
    
    res.json(user);
  } catch (error: any) {
    console.error(error.message);
  }
});



export default router;
