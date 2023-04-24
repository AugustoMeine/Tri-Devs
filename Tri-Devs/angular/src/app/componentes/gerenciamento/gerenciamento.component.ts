import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from "../../models/Usuario.model";

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit{
  gerenciamentoAtual:string = "x";
  usuarioLogado:Usuario;
  constructor(private route: Router){
    this.usuarioLogado=this.validarLogin();
  }

  ngOnInit(): void {
    console.log(this.usuarioLogado);
  }

  validarLogin(){
    let validacao = localStorage.getItem("usuarioLogado");
    if(validacao != null){
      return(JSON.parse(validacao));
    }else{
      this.route.navigate(['/']);
      return(null);
    }

  }

  direcionamento(){
    this.route.navigate(['/Direcionamento'])
  }

  gerenciarUsuario(){
    this.gerenciamentoAtual = "Usuario";
  }

  gerenciarMesa(){
    this.gerenciamentoAtual = "Mesa";
  }

  gerenciarItem(){
    this.gerenciamentoAtual = "Item";
  }
}
