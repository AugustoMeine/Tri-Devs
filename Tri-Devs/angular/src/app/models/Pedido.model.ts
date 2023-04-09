import { Item } from './Item.model';
export class Pedido{   
    idPedido: number;
    item: Item;
    quantidadeItem: number;
    horaResgistro: string;
    status: string;

    constructor(idPedido: number, item: Item, quantidadeItem: number){
        this.idPedido = idPedido;
        this.item = item;
        this.quantidadeItem = quantidadeItem;
        this.horaResgistro = '00:00:00'; //Salvar a hora no momento que realizar o pedido
        this.status = 'Pendente Preparo'; //Salvar o status na hora da realização do pedido
    }
    
}