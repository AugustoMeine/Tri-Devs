import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/env";
import {PedidoDTO} from "../models/Pedido.model";
import {asyncScheduler, of, scheduled} from "rxjs";

const resourcePath = `${environment.baseApiUrl}/pedidos`;
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  buscaPedidoAPI(id: string) {
    // codigo para fazer a requisicao quando o backend estiver implementado
    // return this.http.get<PedidoDTO>(`resourcePath/${id}`);

    // codigo provisorio para simular dados vindos do backend
    return scheduled<PedidoDTO>([
      {
        id: 'order-12345',
        valorTotal: 59.98,
        itens: [
          {
            id: '1',
            preco: 50,
            quantidade: 1,
            nome: 'Pizza Calabresa'
          },
          {
            id: '2',
            preco: 4.99,
            quantidade: 2,
            nome: 'Coca-Cola 600ml'
          }
        ],
        data: '17/04/2023 22:00',
        necessitaPreparo: true
      }
    ], asyncScheduler);
  }
}
