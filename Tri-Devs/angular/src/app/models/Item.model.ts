export interface ItemDTO {
  nome: string;
  preco: number;
  quantidade: number;
  id: string;
}

export class Item{
    nome: string;
    preco: number;

    constructor(nome: string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }
}
