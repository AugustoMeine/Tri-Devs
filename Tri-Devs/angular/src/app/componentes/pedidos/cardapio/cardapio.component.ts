import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/Pedido.model';
import { PedidoService } from 'src/app/services/Pedido.service';
import {ItemService} from "../../../services/Item.service";
import {Item} from "../../../models/Item.model";
import {Comanda} from "../../../models/Comanda.model";
import {Mesa} from "../../../models/Mesa.model";
import {ComandaService} from "../../../services/Comanda.service";
import {switchMap} from "rxjs";


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit{
  listaPedidos: Pedido[] = [];
  listaItens: Item[] = [];
  mesaSelecionada: Mesa;
  comandaParaRegistroDosPedidos: Comanda;

  constructor(private route: Router, private itemService: ItemService, private pedidoService: PedidoService, private comandaService: ComandaService) {
    this.mesaSelecionada = new Mesa(-1,false);
    this.comandaParaRegistroDosPedidos = new Comanda(-1,new Mesa(-1,false),0,false);
  }

  ngOnInit(): void {
    this.lerItens();
    this.lerMesa();
    this.criarListaPedidos();
  }

  direcionamento() {
    this.route.navigate(['/Pedido']);
  }

  lerItens(){
    this.itemService.lerItens().toPromise().then(
      (listaItensRetornada: Item[])=>{
        localStorage.setItem('listaItens',JSON.stringify(listaItensRetornada));
        console.log('Lista de itens retornada com sucesso!');
      }
    );

    let validacao = localStorage.getItem('listaItens');
    if(validacao != null){
      this.listaItens = JSON.parse(validacao);
    }

    localStorage.removeItem('listaItens');
  }

  lerMesa(){
    let retornoVariavelGlobal = localStorage.getItem("mesaParaAdicionarPedidosNaTelaDeComanda");
    if(retornoVariavelGlobal != null){
      this.mesaSelecionada = JSON.parse(retornoVariavelGlobal);
      localStorage.removeItem("mesaParaAdicionarPedidosNaTelaDeComanda");
    }else{
      console.log('Não existe mesa salva');
      localStorage.removeItem("mesaParaAdicionarPedidosNaTelaDeComanda");
    }
  }

  criarListaPedidos(){
    this.listaPedidos = [];
    for(let i:number = 0; i < this.listaItens.length; i++){
      this.listaPedidos.push(new Pedido(-1,this.listaItens[i],new Comanda(-1,this.mesaSelecionada,0,false),0,'','',''));
    }
  }

  subtrairQuantidade(i:number){
    if(this.listaPedidos[i].quantidadeItem != 0){
      this.listaPedidos[i].quantidadeItem -= 1;
    }
  }
  somarQuantidade(i:number){
    this.listaPedidos[i].quantidadeItem += 1;
  }

  registrarPedidos(){
    //Inserir os pedidos na comanda
    for(let i:number = 0;i < this.listaPedidos.length; i++){
      if(this.listaPedidos[i].quantidadeItem > 0){
        this.pedidoService.salvarPedidoComIdMesa(this.mesaSelecionada.idMesa,this.listaPedidos[i]).subscribe();
      }
    }
  }


}
