import { v4 as uuidv4 } from 'uuid';

export class Produtos {
  // Fields
  idProduto: string;
  nome: string;
  descricao?: string;
  preco: number;
  categoria: string;
  published: boolean;

  // Constructor
  constructor(nome: string, descricao: string, preco: number, categoria: string, published: boolean) {
    this.idProduto = uuidv4();
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.published = published;
  }

  // Getters
  getIdProduto(): string {
    return this.idProduto;
  }

  getNome(): string {
    return this.nome;
  }

  getDescricao(): string | undefined {
    return this.descricao;
  }

  getPreco(): number {
    return this.preco;
  }

  getCategoria(): string {
    return this.categoria;
  }

  getPublished(): boolean {
    return this.published;
  }

  // Setters
  setIdProduto(idProduto: string): void {
    this.idProduto = idProduto;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setDescricao(descricao: string | undefined): void {
    this.descricao = descricao;
  }

  setPreco(preco: number): void {
    this.preco = preco;
  }

  setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  setPublished(published: boolean): void {
    this.published = published;
  }
}
