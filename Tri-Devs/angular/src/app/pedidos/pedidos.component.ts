import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Mesa } from '../models/Mesa.model';
import { Comanda } from '../models/Comanda.model';
import { Pedido } from '../models/Pedido.model';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [MessageService]
})
export class PedidosComponent implements OnInit{

  quantidadeMesas = 17;

  listasMesas: Mesa[] = [];

  listaComandas: Comanda[] = [
    new Comanda(1, [new Pedido(1,new Item(1,'Pizza de chocolate', 59.90, true),2)], 1),
    new Comanda(2, [new Pedido(1,new Item(1,'Pizza de chocolate', 59.90, true),2)], 1)
  ];

  onSelect(mesa: Mesa): void {
    console.log(mesa.idMesa)
  }

  constructor(private route:Router, private toast:MessageService){
    this.listaComandas = [];

    while(this.quantidadeMesas > 0){
      this.listasMesas.push(new Mesa(this.quantidadeMesas));
      this.quantidadeMesas -= 1;
    }
  }

  ngOnInit(): void {
  }

  verDetalheComandaMesa(mesa:Mesa) {
    this.route.navigate(['/Comanda']);
  }

  adicionarItemMesa(mesa:Mesa) {
    this.route.navigate(['/Cardapio']);
  }

  finalizarComandaMesa(mesa:Mesa) {
    this.toast.add({severity: 'success', summary: 'Mesa Finalizada', detail: 'Comanda enviada para a tela do caixa!'});
  }

  quantidadeItensMesa = 3
  somaQuantidadeItensMesa(){
    this.quantidadeItensMesa++;
  }
}

