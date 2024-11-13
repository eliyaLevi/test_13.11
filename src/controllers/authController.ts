import express, { IRouter, Request, Response } from "express";
import { AddUser, login, logout } from "../services/authServices";

const router: IRouter = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const realUser = await login(user, res);
    res.json(realUser);
  } catch (error: any) {
    console.error(error.message);
  }
});


router.post("/logout", (req: Request, res: Response): void => {
    try {
        logout(res);
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error: any) {
        console.error(error.message);
    }
});

router.post("/register", (req: Request, res: Response): void => {
  try {
    const newUser = req.body
      const user = AddUser(newUser);
      res.json(newUser);
  } catch (error: any) {
      console.error(error.message);
  }
});

export default router;

