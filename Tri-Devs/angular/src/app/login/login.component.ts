import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{


login: string
senha: string


constructor(){
this.login = "";
this.senha = "";
}

ngOnInit(): void {
    
}

entrar(){
  console.log("Login:" + this.login)
  console.log("Senha:" + this.senha)
}

}