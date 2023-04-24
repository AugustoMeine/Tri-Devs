import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Pedido} from "../../models/Pedido.model";
import {Mesa} from "../../models/Mesa.model";
import {Comanda} from "../../models/Comanda.model";
import {PedidoService} from "../../services/Pedido.service";
import {MesaService} from "../../services/Mesa.service";
import {ComandaService} from "../../services/Comanda.service";


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit{
  ListaMesas: Mesa[] = []
  listaPedidos: Pedido[] = []


  constructor(private router: Router,private pedidoService: PedidoService, private mesaService: MesaService, private comandaService: ComandaService){

  }

  ngOnInit(): void {

  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  selecionarMesa(mesa:Mesa){

  }

  cancelarPedido(){

  }

  finalizarPedido(){

  }
}
