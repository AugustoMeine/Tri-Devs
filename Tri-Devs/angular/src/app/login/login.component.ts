import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{


login: string
senha: string


constructor(private route:Router){
this.login = "";
this.senha = "";
}

ngOnInit(): void {
}

entrar(){
  console.log('login: ' + this.login)
  console.log('senha: ' + this.senha)
  this.route.navigate(['/']);
}

}
