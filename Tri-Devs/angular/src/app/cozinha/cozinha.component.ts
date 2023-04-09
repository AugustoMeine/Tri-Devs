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
    this.existePedidoTela = false; //Deixar false, iniciar a tela sem detalhamento sendo exibido.
    this.listaComandas = [];
    this.listaComandasPendentePreparo = [];
    this.comandaNull = new Comanda(-1,[],-1)
    this.comandaSendoAtendida = this.comandaNull;
  }

  ngOnInit(): void {
    this.selecionarComandaMaisRecente();
    this.atualizaPedidosPendentePreparo();
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }
  
  selecionaComanda(comanda:Comanda){
    this.existePedidoTela = true;
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

    this.listaComandasPendentePreparo = [];

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
        if((validacao) && (comanda.comandaAberta == true)){
          this.listaComandasPendentePreparo.push(comanda);
          validacao = false;
        };
      }
    );
    
  }
 
  finalizarPedido(){
    if(this.comandaSendoAtendida.idComanda != -1){
      this.listaComandas.forEach(
        (comandaAux)=>{
          if(comandaAux.idMesa == this.comandaSendoAtendida.idMesa){
            comandaAux.listaPedidos.forEach(
              (pedidoAux)=>{
                if(pedidoAux.status === 'Pendente Preparo'){
                  pedidoAux.status = 'Pedido finalizado';
                }
              }
            );
          }
        }
      );
    }else{
      console.log("Não existe comanda selecionada!")
    }

    this.atualizaPedidosPendentePreparo();
    this.selecionarComandaMaisRecente();
  }

  cancelarPedido(){
    if(this.comandaSendoAtendida.idComanda != -1){
      this.listaComandas.forEach(
        (comandaAux)=>{
          if(comandaAux.idMesa == this.comandaSendoAtendida.idMesa){
            comandaAux.listaPedidos.forEach(
              (pedidoAux)=>{
                if(pedidoAux.status === 'Pendente Preparo'){
                  pedidoAux.status = 'Pedido cancelado';
                }
              }
            );
          }
        }
      );
    }else{
      console.log("Não existe comanda selecionada!")
    }

    this.atualizaPedidosPendentePreparo();
    this.selecionarComandaMaisRecente();
  }

}
