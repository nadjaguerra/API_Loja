import { Request, Response } from "express";
import { Produtos } from "../models/produtos";
import produtosRepository from "../repositories/produtos.repository";
import { v4 as uuidv4 } from 'uuid';



export default class ProdutosController {

  async create(req: Request, res: Response) {
    if (!req.body.nome) {
      res.status(400).send({
        message: "Nome não pode ser vazio!"
      });
      return;
    }

    try {
      const produtos: Produtos = req.body;
      if (!produtos.published) produtos.published = false;

      produtos.idProduto = uuidv4();

      const savedProdutos = await produtosRepository.save(produtos);

      res.status(201).send(savedProdutos);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar salvar um Produto."
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const produtos = await produtosRepository.retrieveAll();

      res.status(200).send(produtos);
    } catch (err) {
      res.status(500).send({
        message: "Erro encontrado quando estava se fazendo a busca por todos os produtos."
      });
    }
  }

}
