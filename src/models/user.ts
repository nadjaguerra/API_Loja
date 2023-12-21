import { v4 as uuidv4 } from 'uuid';

export class User {
  // Fields
  idUser: string;
  nome: string;
  email: string;
  password: string;

  // Constructor
  constructor(nome: string, email: string, password: string) {
    this.idUser = uuidv4();
    this.nome = nome;
    this.email = email;
    this.password = password;
  }

  // Getters
  getIdUser(): string {
    return this.idUser;
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }

  // Setters
  setIdUser(idUser: string): void {
    this.idUser = idUser;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }
}
