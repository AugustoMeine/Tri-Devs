import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroAtual:string = "x";

  constructor(private router: Router){
  }

  ngOnInit(): void {      
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

  cadastrarUsuario(){
    this.cadastroAtual = "Usuario";
  }

  cadastrarMesa(){
    this.cadastroAtual = "Mesa";
  }

  cadastrarItem(){
    this.cadastroAtual = "Item";
  }


 
}
