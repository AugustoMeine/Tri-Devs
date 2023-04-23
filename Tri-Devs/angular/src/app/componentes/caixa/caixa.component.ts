import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Pedido} from "../../models/Pedido.model";
import {Mesa} from "../../models/Mesa.model";


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit{
  listaPedidos:Pedido[] = [];
  listaMesas:Mesa[] = [];

  mesaSelecionada: Mesa;


  constructor(private router: Router){
    this.mesaSelecionada = this.listaMesas[0];
    //o
  }

  ngOnInit(): void {

  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  cancelarPedido(){

  }

  finalizarPedido(){

  }

  selecionarMesa(mesa:Mesa){

  }

}
