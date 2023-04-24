import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comanda } from 'src/app/models/Comanda.model';
import { Pedido } from 'src/app/models/Pedido.model';
import {ComandaService} from "../../services/Comanda.service";
import {PedidoService} from "../../services/Pedido.service";
import {interval, Subscription} from "rxjs";


@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
  providers: []
})
export class CozinhaComponent implements OnInit,OnDestroy{

  listaPedidos: Pedido[] = [];
  private subscription: Subscription;
  constructor(private router: Router,private comandaService: ComandaService,private pedidoService:PedidoService,){
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.lerPedidosPendentePreparo(); // substitua "minhaFuncao" pela função que deseja executar
    });
    this.lerPedidosPendentePreparo();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  lerPedidosPendentePreparo(){
    this.listaPedidos = [];

    this.pedidoService.lerPedidosPendentePreparo().subscribe(
      (data: Pedido[])=>{
        localStorage.setItem('pedidosPendentePreparo',JSON.stringify(data));
      }
    );

    let listaRetornada = localStorage.getItem('pedidosPendentePreparo');
    if (listaRetornada != null){
      this.listaPedidos = JSON.parse(listaRetornada);
    }
  }

  finalizarPedido(){
    this.pedidoService.alterarStatusPedido(this.listaPedidos[0].idPedido,2).subscribe(
      (data:any) => {console.log(data)}
    );

    this.listaPedidos = this.listaPedidos.slice(1,this.listaPedidos.length);
  }

  cancelarPedido(){
    this.pedidoService.alterarStatusPedido(this.listaPedidos[0].idPedido,4).subscribe(
      (data:any) => {console.log(data)}
    );

    this.listaPedidos = this.listaPedidos.slice(1,this.listaPedidos.length);
  }

}
