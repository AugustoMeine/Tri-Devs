import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario.service';
import {Usuario} from "../../models/Usuario.model";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  login: string;
  senha: string;

  constructor(private route:Router, private usuarioService: UsuarioService){
    this.login = "adm";
    this.senha = "adm";
  }

  ngOnInit(): void {
  }

  entrar(){
    this.usuarioService.logar(this.login,this.senha).subscribe(
      {
        next:(data: Usuario)=>{
          if(data){
            console.log("Logado com sucesso!");
            console.log(data);
            this.route.navigate(['/Direcionamento']);
          }else{
            console.log("Login e/ou senha inválido(s)");
            console.log(data);
          }
        },
        error:(erro: any)=>{
          console.log("Falha no envio dos dados: ");
          console.log(erro);
        }
      }
    );
  }

}
