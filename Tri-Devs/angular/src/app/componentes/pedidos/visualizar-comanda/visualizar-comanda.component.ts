import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comanda } from 'src/app/models/Comanda.model';
import { Router } from '@angular/router';

import { ComandaService } from 'src/app/services/Comanda.service';
import { Mesa } from 'src/app/models/Mesa.model';
import { PedidoService } from 'src/app/services/Pedido.service';
import { Pedido } from 'src/app/models/Pedido.model';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-visualizar-comanda',
  templateUrl: './visualizar-comanda.component.html',
  styleUrls: ['./visualizar-comanda.component.css'],
})
export class VisualizarComandaComponent implements OnInit,OnDestroy{
  private subscription: Subscription;
  listaPedidos: Pedido[] = [];

  mesaSelecionada: Mesa;

  constructor(private route: Router, private pedidoService: PedidoService) {
    this.subscription = new Subscription();
    this.mesaSelecionada = new Mesa(-1,false);
  }

  ngOnInit(): void {
    this.lerMesa();
    this.lerListaPedidos();
    this.subscription = interval(1000).subscribe(() => {
      this.x(); // substitua "minhaFuncao" pela função que deseja executar
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  x(){
    if(this.mesaSelecionada.idMesa != -1){
      this.lerListaPedidos();
    }
  }

  direcionamento() {
    this.route.navigate(['/Pedido']);
  }

  lerMesa(){
    let retornoVariavelGlobal = localStorage.getItem("mesaParaLerPedidosNaTelaDeComanda");
    if(retornoVariavelGlobal != null){
      this.mesaSelecionada = JSON.parse(retornoVariavelGlobal);
      localStorage.removeItem("mesaParaLerPedidosNaTelaDeComanda");
    }else{
      console.log('Não existe mesa salva');
      localStorage.removeItem("mesaParaLerPedidosNaTelaDeComanda");
    }
  }

  lerListaPedidos(){
    this.pedidoService.lerPedidosDaMesa(this.mesaSelecionada.idMesa).subscribe(
      (listaPedidosRetornado:Pedido[])=>{
        this.listaPedidos = listaPedidosRetornado;
        console.log('Pedidos retornados com sucesso!');
      }
    );
  }
  finalizarPedido(pedido:Pedido){

    if(pedido.status=='Pendente entrega'){
      this.pedidoService.alterarStatusPedido(pedido.idPedido,3).subscribe(
        (pedidoRetornado:Pedido)=>{
          console.log('Pedido finalizado com sucesso!');
        }
      );
    }else{
      console.log('O pedido não está pendente entrega!');
    }


  }

  cancelarPedido(pedido:Pedido){
    this.pedidoService.alterarStatusPedido(pedido.idPedido,4).subscribe(
      (pedidoRetornado:Pedido)=>{
        console.log('Pedido cancelado com sucesso!');
      }
    );
  }

}
