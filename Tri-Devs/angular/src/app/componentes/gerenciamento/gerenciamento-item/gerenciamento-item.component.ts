import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../models/Usuario.model";
import {Item} from "../../../models/Item.model";
import {UsuarioService} from "../../../services/Usuario.service";
import {ItemService} from "../../../services/Item.service";

@Component({
  selector: 'app-gerenciamento-item',
  templateUrl: './gerenciamento-item.component.html',
  styleUrls: ['./gerenciamento-item.component.css']
})
export class GerenciamentoItemComponent implements OnInit{

  listaItens: Item[] = [];
  itemSelecionado: Item;
  cadastroVisivel:boolean = false;

  idItem: number;
  nome: string;
  precoUnidade: number;
  necessitaPreparoCozinha: boolean;

  constructor(private itemService: ItemService){
    this.idItem = 1;
    this.nome = "";
    this.precoUnidade = -1;
    this.necessitaPreparoCozinha = false;

    this.atualizarLista();

    this.itemSelecionado = this.listaItens[0];

  }

  ngOnInit(): void {
  }

  cadastrarModel(){
    this.cadastroVisivel = true;
  }

  finalizarCadastro(){
    this.cadastroVisivel = false;
  }

  atualizarLista(){

  }

}
