import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Pedido} from "../../models/Pedido.model";
import {Mesa} from "../../models/Mesa.model";
import {Comanda} from "../../models/Comanda.model";
import {PedidoService} from "../../services/Pedido.service";
import {MesaService} from "../../services/Mesa.service";
import {ComandaService} from "../../services/Comanda.service";
import {interval, Subscription} from "rxjs";


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit{
  private subscription: Subscription;
  listaMesas: Mesa[] = []
  listaPedidos: Pedido[] = []
  mesaSelecionada: Mesa;
  comandaDaMesaSelecionada: Comanda;
  valorTotal: number = 0;
  valorPago: number = 0;
  valorExcesso:number = 0;
  retornoValor: string = 'Troco';


  constructor(private router: Router,private pedidoService: PedidoService, private mesaService: MesaService, private comandaService: ComandaService){
    this.subscription = new Subscription();
    this.mesaSelecionada = new Mesa(-1,false);
    this.comandaDaMesaSelecionada = new Comanda(-1,this.mesaSelecionada,0,false);
  }

  ngOnInit(): void {
    this.lerMesas();
  }


  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  selecionarMesa(mesa:Mesa){
    this.valorTotal = 0;
    this.mesaSelecionada = mesa;

    //Le os pedidos vinculados a mesa
    this.lerPedidosFinalizadosDaMesa();


  }

  lerMesas(){
    this.mesaService.lerMesas().subscribe(
      (mesasRetornadas:Mesa[])=>{
        this.listaMesas = mesasRetornadas;
      }
    );
  }

  lerPedidosFinalizadosDaMesa(){
    this.listaPedidos = [];

    this.pedidoService.lerPedidosFinalizadosDaMesa(this.mesaSelecionada.idMesa).subscribe(
      (listaPedidosRetornada: Pedido[])=>{
        this.listaPedidos =listaPedidosRetornada;
        console.log('Pedidos da mesa ' + this.mesaSelecionada.idMesa + ' lidos com sucesso!');
        if(this.listaPedidos.length > 0){
          for(let i:number = 0; i < this.listaPedidos.length; i++){
            this.valorTotal += (this.listaPedidos[i].item.precoUnidade * this.listaPedidos[i].quantidadeItem);
          }
        }
      }
    );
  }

  realizarPagamento(){
    if(this.valorTotal - this.valorPago == 0){
      this.retornoValor = 'Troco';
      this.valorExcesso = 0;
      this.comandaService.finalizarComanda(this.listaPedidos[0].comanda.idComanda).subscribe(
        (comandaRetornada:Comanda)=>{
          this.valorTotal = 0;
          this.valorPago = 0;
          console.log('Comanda encerrada com sucesso!');
        }
      );
    }
    else if(this.valorTotal - this.valorPago > 0){
      this.retornoValor = 'Valor faltante';
      this.valorExcesso = Number((this.valorTotal - this.valorPago).toFixed(2));
    }
    else{
      this.retornoValor = 'Troco';
      this.valorExcesso = this.valorPago - this.valorTotal;
      this.valorExcesso = Number(this.valorExcesso.toFixed(2));

      this.comandaService.finalizarComanda(this.listaPedidos[0].comanda.idComanda).subscribe(
        (comandaRetornada:Comanda)=>{
          this.valorTotal = 0;
          this.valorPago = 0;
          console.log('Comanda encerrada com sucesso!');
        }
      );
    }
  }

}
