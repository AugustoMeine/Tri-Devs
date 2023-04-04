import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})

export class CaixaComponent {
  constructor(private router: Router){}

direcionamento(){
  this.router.navigate(['/Direcionamento'])

}
}






