import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../../../models/Item.model";
import {ItemService} from "../../../services/Item.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-gerenciamento-item',
  templateUrl: './gerenciamento-item.component.html',
  styleUrls: ['./gerenciamento-item.component.css']
})
export class GerenciamentoItemComponent implements OnInit,OnDestroy{
  private subscription: Subscription;
  listaItens: Item[] = [];
  itemAlteracao: Item;
  itemCadastro: Item;
  cadastroVisivel:boolean = false;
  alterarVisivel:boolean = false;

  constructor(private itemService: ItemService){
    this.subscription = new Subscription();

    this.itemCadastro = new Item(-1,'',0,false);
    this.itemAlteracao = new Item(-1,'',0,false);
    this.lerListaItem();

  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.x(); // substitua "minhaFuncao" pela função que deseja executar
    });

    this.x();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  x(){
    if(!this.alterarVisivel){
      this.lerListaItem();
    }
  }

  lerListaItem(){
    this.itemService.lerItens().subscribe(
      (listaItens: Item[])=>{
        this.listaItens = listaItens;
      }
    );
  }

  cadastrarModel(){
    this.cadastroVisivel = true;
  }

  alterarModel(item: Item){
    this.itemAlteracao = item;
    this.alterarVisivel = true;
  }

  alterarItem(item:Item){
    this.itemService.atualizarItem(item).subscribe(
      (itemRetornado: Item)=>{
        console.log('Item alterado: ' + itemRetornado);
      }
    );

    this.alterarVisivel = false;
  }


  realizarCadastro(){
    this.itemService.salvarItem(this.itemCadastro).subscribe(
      (retorno:Item)=>{
        console.log('Item Cadastrado' + retorno);
      }
    );

    this.lerListaItem();

    this.cadastroVisivel = false;
  }

  excluirItem(item:Item){
    this.itemService.deletarItem(item.idItem).subscribe(
      (retorno:any)=>{
        console.log('Item excluido: ' + retorno);
      }
    );
  }

}
