import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../models/Usuario.model";
import {Item} from "../../../models/Item.model";
import {UsuarioService} from "../../../services/usuario/Usuario.service";

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

  constructor(private usuarioService: UsuarioService){
    this.idItem = 1;
    this.nome = "";
    this.precoUnidade = -1;
    this.necessitaPreparoCozinha = false;

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

}
