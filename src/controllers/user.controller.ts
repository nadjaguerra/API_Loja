import { Request, Response } from "express";
import { User } from "../models/user";
import userRepository from "../repositories/user.repository";

export default class UserController {

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userRepository.findByEmail(email);

      if (!user) {
        res.status(401).send({
          message: "Usuário não encontrado."
        });
        return;
      }

      if (password !== user.password) {
        res.status(401).send({
          message: "Senha incorreta."
        });
        return;
      }

      // Remoção da geração de token:
      // const token = await userRepository.generateToken(user);

      res.status(200).send({
        message: "Usuário autenticado com sucesso."
      });
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar autenticar o usuário."
      });
    }
  }

  async create(req: Request, res: Response) {
    const { nome, email, password } = req.body;

    if (!nome) {
      res.status(400).send({
        message: "Nome não pode ser vazio!"
      });
      return;
    }

    if (!email) {
      res.status(400).send({
        message: "Email Inválido!"
      });
      return;
    }

    if (!password) {
      res.status(400).send({
        message: "Senha Inválida!"
      });
      return;
    }

    try {
      const user = new User(nome, email, password);
      const savedUser = await userRepository.save(user);

      res.status(201).send(savedUser);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar criar o usuário."
      });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const users = await userRepository.retrieveAll();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar recuperar os usuários."
      });
    }
  }

}
