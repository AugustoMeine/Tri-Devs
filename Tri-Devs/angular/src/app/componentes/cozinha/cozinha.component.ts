import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Comanda } from 'src/app/models/Comanda.model';
import { Pedido } from 'src/app/models/Pedido.model';
import { Item } from 'src/app/models/Item.model';


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

    this.listaComandas = [
      new Comanda(1,[
        new Pedido(1,new Item(1,'Pizza de chocolate',45.90,true),2),      
        new Pedido(1,new Item(2,'Pizza de frango',25.90,true),1),
        new Pedido(1,new Item(3,'Coca-cola',12.50,true),1),
        new Pedido(1,new Item(4,'Agua sem gas',12.50,true),1)
      ],1),
      new Comanda(2,[
        new Pedido(1,new Item(1,'Pizza de portuguesa',35.90,true),1),      
        new Pedido(1,new Item(2,'Pizza de frango',25.90,true),2),
        new Pedido(1,new Item(3,'Coca-cola',12.50,true),1),
        new Pedido(1,new Item(4,'Agua sem gas',12.50,true),1)
      ],3),
      new Comanda(3,[      
        new Pedido(1,new Item(2,'Pizza de frango',25.90,true),2)
      ],7)
    ];
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
