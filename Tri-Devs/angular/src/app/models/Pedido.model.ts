import { Item } from './Item.model';
import {Comanda} from "./Comanda.model";
export class Pedido{
    idPedido: number;
    item: Item;
    comanda: Comanda;
    quantidadeItem: number;
    horaResgistro: string;
    dataResgistro: string;
    status: string;

  constructor(idPedido: number, item: Item, comanda: Comanda, quantidadeItem: number, horaResgistro: string, dataResgistro: string, status: string) {
    this.idPedido = idPedido;
    this.item = item;
    this.comanda = comanda;
    this.quantidadeItem = quantidadeItem;
    this.horaResgistro = horaResgistro;
    this.dataResgistro = dataResgistro;
    this.status = status;
  }
}
