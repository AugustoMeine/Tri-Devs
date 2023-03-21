import { Router } from '@angular/router';
import { Item } from './../models/Item.model';
import { Mesa } from './../models/Mesa.model';
import { Pedido } from './../models/Pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit{

  mesas: Mesa[] = [];

  constructor(private router: Router){
    this.mesas = [
      new Mesa(
        1,
        [
          new Pedido(
            new Item('Pizza de calabresa', 25.90),
            1,
            true
          )          
        ]
      )
    ];
  }

  ngOnInit(): void {
    this.mesas[0].popularPrecoComPedidosExistentes;
  }

  direcionamento(){
    this.router.navigate(['/Direcionamento'])
  }

}
