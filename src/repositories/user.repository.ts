import { User } from "../models/user";
//import jwt from 'jsonwebtoken'; 

class UserRepository {
  private usersDB: User[] = []; // Using private for encapsulation

  async save(user: User): Promise<User> {
    try {
      this.usersDB.push(user);
      return user;
    } catch (err) {
      throw new Error("Falha ao criar o usuário!");
    }
  }

  async retrieveAll(): Promise<User[]> {
    try {
      return this.usersDB;
    } catch (error) {
      throw new Error("Falha ao retornar os usuários!");
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      return this.usersDB.find((user) => user.email === email); 
    } catch (error) {
      throw new Error("Falha ao encontrar o usuário por e-mail!");
    }
  }

 /* async generateToken(user: User): Promise<string> {
    const token = jwt.sign({
      id: user.id,
      nome: user.nome,
      email: user.email
    }, process.env.JWT_SECRET!); 

    return token;
  }*/
}

export default new UserRepository();
