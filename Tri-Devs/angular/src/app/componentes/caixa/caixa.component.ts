import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent {

  constructor(private router:Router) {
  }
  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }
}
