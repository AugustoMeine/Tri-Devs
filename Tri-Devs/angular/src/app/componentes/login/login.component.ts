import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  login: string
  senha: string


  constructor(private route:Router, private loginService: LoginService){
  this.login = "";
  this.senha = "";
  }

  ngOnInit(): void {
  }

  entrar(){

    this.loginService.logar(this.login,this.senha).subscribe(
      {
        next:(data: Usuario)=>{
          if(!data){
            console.log("Logado com sucesso!");
            console.log(data);
            this.route.navigate(['/Direcionamento']);                        
          }else{
            console.log("Erro ao logar!");
            console.log(data);
          }
        },
        error:(erro: any)=>{
          console.log("Erro ao logar: " + erro);
        }
      }
    );
    

  }

}
