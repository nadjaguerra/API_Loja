import { Application } from "express";
import homeRoutes from "./home.routes";
//import generoRoutes from "./genero.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/", homeRoutes);
    //app.use("/seuZeFilmes", generoRoutes);

  }
}