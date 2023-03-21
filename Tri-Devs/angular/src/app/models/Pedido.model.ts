import { Item } from './Item.model';

export class Pedido{
    item: Item;
    quantidade: number;
    preco: number;
    precoUnidade: number;
    necessitaPreparo: boolean;

    constructor(item: Item, quantidade: number, necessitaPreparo: boolean){
        this.item = item;
        this.quantidade = quantidade;
        this.necessitaPreparo = necessitaPreparo;
        this.precoUnidade = item.preco;
        this.preco = item.preco * quantidade;
    }
    
}