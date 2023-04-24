import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit{
  // gerenciamentoAtual:string = "x";
  gerenciamentoAtual:string = "Usuario";

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
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
