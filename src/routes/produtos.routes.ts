import { Router } from "express";
import ProdutosController from "../controllers/produtos.controller";

class ProdutosRoutes {
  router = Router();
  controller = new ProdutosController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/produtos", this.controller.findAll);

   // this.router.get("/produto/:id", this.controller.findOne);

    // Criar um novo genero.
    this.router.post("/produto", this.controller.create);

    // Retornar os generos já cadastrados.
    this.router.get("/produtos", this.controller.findAll);
  }
}
export default new ProdutosRoutes().router;
