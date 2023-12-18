import { Produtos } from "../models/produtos";

class ProdutosRepository {
    produtosDB = new Array<Produtos>();

    async save(produtos: Produtos): Promise<Produtos> {
        try {
            this.produtosDB.push(produtos);
            return produtos;
        } catch (err) {
            throw new Error("Falha ao criar o pproduto!");
        }
    }

    async retrieveAll(): Promise<Array<Produtos>>{
        try {
            return this.produtosDB;
        } catch (error) {
            throw new Error("Falha ao retornar os produtos!");
        }
    }

}

export default new ProdutosRepository();