/*
import { v4 as uuidv4 } from 'uuid';

export class Venda {
  // Fields
  idVenda: string;
  clienteId: string;
  produtos: Array<{ produtoId: string; quantidade: number }>;
  valorTotal: number;
  dataVenda: Date;

  // Constructor
  constructor(
    clienteId: string,
    produtos: Array<{ produtoId: string; quantidade: number }>,
    valorTotal: number,
    dataVenda: Date
  ) {
    this.idVenda = uuidv4();
    this.clienteId = clienteId;
    this.produtos = produtos;
    this.valorTotal = valorTotal;
    this.dataVenda = dataVenda;
  }

  // Getters
  getIdVenda(): string {
    return this.idVenda;
  }

  getClienteId(): string {
    return this.clienteId;
  }

  getProdutos(): Array<{ produtoId: string; quantidade: number }> {
    return this.produtos;
  }

  getValorTotal(): number {
    return this.valorTotal;
  }

  getDataVenda(): Date {
    return this.dataVenda;
  }

  // Setters
  setIdVenda(idVenda: string): void {
    this.idVenda = idVenda;
  }

  setClienteId(clienteId: string): void {
    this.clienteId = clienteId;
  }

  setProdutos(produtos: Array<{ produtoId: string; quantidade: number }>): void {
    this.produtos = produtos;
  }

  setValorTotal(valorTotal: number): void {
    this.valorTotal = valorTotal;
  }

  setDataVenda(dataVenda: Date): void {
    this.dataVenda = dataVenda;
  }
}

*/