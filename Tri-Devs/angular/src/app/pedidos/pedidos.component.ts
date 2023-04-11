import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MesaHenrique } from '../models/MesaHenrique.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [MessageService]
})
export class PedidosComponent implements OnInit{

    listaMesas: MesaHenrique[] = [
    new MesaHenrique(1, 'Mesa 01'),
    new MesaHenrique(2, 'Mesa 02'),
    new MesaHenrique(3, 'Mesa 03'),
    new MesaHenrique(4, 'Mesa 04'),
    new MesaHenrique(5, 'Mesa 05'),
    new MesaHenrique(6, 'Mesa 06'),
    new MesaHenrique(7, 'Mesa 07'),
    new MesaHenrique(8, 'Mesa 08'),
    new MesaHenrique(9, 'Mesa 09'),
    new MesaHenrique(10, 'Mesa 10'),
    new MesaHenrique(11, 'Mesa 11'),
    new MesaHenrique(12, 'Mesa 12'),
    new MesaHenrique(13, 'Mesa 13'),
    new MesaHenrique(14, 'Mesa 14'),
    new MesaHenrique(15, 'Mesa 15'),
    new MesaHenrique(16, 'Mesa 16'),
    new MesaHenrique(17, 'Mesa 17')
  ];

  onSelect(mesa: MesaHenrique): void {
    console.log(mesa.name)
  }

  constructor(private route:Router, private toast:MessageService){
  }

  ngOnInit(): void {
  }

  verDetalheComandaMesa(mesa:MesaHenrique) {
    this.route.navigate(['/Comanda']);
  }

  adicionarItemMesa(mesa:MesaHenrique) {
    this.route.navigate(['/Cardapio']);
  }

  finalizarComandaMesa(mesa:MesaHenrique) {
    this.toast.add({severity: 'success', summary: 'Success', detail: 'Comanda finalizada com sucesso!'});
    console.log('QualquerMensagem');
  }

  quantidadeItensMesa = 3
  somaQuantidadeItensMesa(){
    this.quantidadeItensMesa++;
  }
}

