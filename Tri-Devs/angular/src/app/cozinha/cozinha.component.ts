import { Router } from '@angular/router';
import { Item } from './../models/Item.model';
import { Mesa } from './../models/Mesa.model';
import { Comanda } from '../models/Comanda.model';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido.model';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
  providers: []
})
export class CozinhaComponent implements OnInit{

  listaComandas: Comanda[];
  listaComandasPendentePreparo: Comanda[];
  comandaSendoAtendida: Comanda;
  comandaNull: Comanda;
  existePedidoTela: boolean;

  constructor(private router: Router){
    this.existePedidoTela = false;
    this.listaComandas = [];
    this.listaComandasPendentePreparo = [];
    this.comandaNull = new Comanda(-1,[],-1)
    this.comandaSendoAtendida = this.comandaNull;

    this.listaComandas = [     
      new Comanda(1,[new Pedido(1,new Item(1,'Pizza de frango', 55.79,true),5)],1),
      new Comanda(2,[new Pedido(2,new Item(2,'Pizza de Mortadela', 45.79,true),2)],2),
      new Comanda(3,[new Pedido(3,new Item(3,'Pizza de chocolate', 79.90,true),1)],3)
    ]
  }

  ngOnInit(): void {
    this.selecionarComandaMaisRecente();
    this.atualizaPedidosPendentePreparo();
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }
  
  selecionaComanda(comanda:Comanda){
    this.comandaSendoAtendida = comanda;
  }

  selecionarComandaMaisRecente(){
    if(this.listaComandasPendentePreparo.length != 0){
      this.existePedidoTela = true;
      this.selecionaComanda(this.listaComandasPendentePreparo[0]);
    }
    else{
      this.existePedidoTela = false;
      this.comandaSendoAtendida = this.comandaNull;
    }
  }

  atualizaPedidosPendentePreparo(){  
    
    let validacao: boolean = false;

    this.listaComandas.forEach(
      (comanda)=>{
        comanda.listaPedidos.forEach(
          (pedido)=>{
            if(pedido.status == 'Pendente Preparo'){
              validacao = true;
              return;
            }
          }          
        );
        if(validacao){
          this.listaComandasPendentePreparo.push(comanda);
          validacao = false;
        };
      }
    );
    
  }

}
