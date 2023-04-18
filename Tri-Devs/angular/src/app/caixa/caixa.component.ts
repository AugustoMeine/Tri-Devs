import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {PedidoService} from "../services/pedido.service";
import {PedidoDTO} from "../models/Pedido.model";


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})

export class CaixaComponent {
  idPedido = '';
  pedidoEncontrado?: PedidoDTO;
  inputValorRecebido?: number;
  valorRecebido?: number;
  metodoPagamento?: string;
  constructor(private router: Router, private pedidoService: PedidoService){}

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  buscarPedido() {
    this.pedidoService.buscaPedidoAPI(this.idPedido).subscribe({
      next: (data) => {
        console.log('Pedido encontrado: ', data);
        if (data) {
          this.pedidoEncontrado = data;
        } else {
          this.resetEstados()
        }
      },
      error: (e) => {
        console.log('Erro: ', e);
        this.resetEstados();
      }
    })
  }

  inserirValor() {
    this.valorRecebido = this.inputValorRecebido;
  }

  resetEstados() {
    this.pedidoEncontrado = undefined;
    this.valorRecebido = undefined;
    this.metodoPagamento = undefined
  }
}






