import { Application } from "express";
import homeRoutes from "./home.routes";
import produtosRoutes from "./produtos.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/produtos", homeRoutes);
    app.use("/produtos", produtosRoutes);

  }
}