export class Item{
    idItem: number;
    nome: string;
    precoUnidade: number;
    necessitaPreparoCozinha?: boolean;


  constructor(idItem: number, nome: string, precoUnidade: number, necessitaPreparoCozinha: boolean) {
    this.idItem = idItem;
    this.nome = nome;
    this.precoUnidade = precoUnidade;
    this.necessitaPreparoCozinha = necessitaPreparoCozinha;
  }
}
