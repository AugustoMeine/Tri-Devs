import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../models/Usuario.model";
import {UsuarioService} from "../../../services/Usuario.service";
import {Mesa} from "../../../models/Mesa.model";

@Component({
  selector: 'app-gerenciamento-mesa',
  templateUrl: './gerenciamento-mesa.component.html',
  styleUrls: ['./gerenciamento-mesa.component.css']
})
export class GerenciamentoMesaComponent implements OnInit{
  listaMesas: Mesa[] = [];
  mesaSelecionada: Mesa;

  idMesa: number;
  estaOcupada: boolean;

  constructor(private usuarioService: UsuarioService){

    this.idMesa= -1;
    this.estaOcupada = false;
    this.mesaSelecionada = this.listaMesas[0];
  }

  ngOnInit(): void {
  }

  cadastrarMesa(){

  }
}
