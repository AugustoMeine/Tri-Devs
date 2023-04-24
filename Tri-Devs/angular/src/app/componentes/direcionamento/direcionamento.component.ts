import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/Usuario.model";

@Component({
  selector: 'app-direcionamento',
  templateUrl: './direcionamento.component.html',
  styleUrls: ['./direcionamento.component.css']
})
export class DirecionamentoComponent implements OnInit{

  usuarioLogado:Usuario;

  constructor(private route:Router){
    this.usuarioLogado=this.validarLogin();
  }

  ngOnInit(): void {
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

  caixa(){
    this.route.navigate(['/Caixa']);
  }

  cozinha(){
    this.route.navigate(['/Cozinha']);
  }

  pedido(){
    this.route.navigate(['/Pedido']);
  }

  gerenciamento(){
    this.route.navigate(['/Gerenciamento']);
  }

  desconectar(){
    localStorage.removeItem("usuarioLogado");
    this.route.navigate(['/']);
  }

}
