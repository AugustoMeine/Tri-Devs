import { Pedido } from './Pedido.model';
import {Mesa} from "./Mesa.model";

export class Comanda{
    idComanda: number;
    mesa: Mesa;
    precoTotalPedido: number;
    comandaAberta: boolean;

  constructor(idComanda: number, mesa: Mesa, precoTotalPedido: number, comandaAberta: boolean) {
    this.idComanda = idComanda;
    this.mesa = mesa;
    this.precoTotalPedido = precoTotalPedido;
    this.comandaAberta = comandaAberta;
  }

}
