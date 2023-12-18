import { Router, Request, Response } from "express";
// import { welcome } from "../controllers/home.controller";

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Bem Vindo!") });
    this.router.get("/produtos", (req: Request, res: Response) => { return res.status(200).json("Não há produtos cadastrados") });
  }
}

export default new HomeRoutes().router;