import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direcionamento',
  templateUrl: './direcionamento.component.html',
  styleUrls: ['./direcionamento.component.css']
})
export class DirecionamentoComponent implements OnInit{

  validacao: Boolean = false;

  constructor(private route:Router){
  }

  ngOnInit(): void {
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

  cadastro(){
    this.route.navigate(['/Cadastro']);
  }

  desconectar(){
    this.route.navigate(['/']);
  }

}
