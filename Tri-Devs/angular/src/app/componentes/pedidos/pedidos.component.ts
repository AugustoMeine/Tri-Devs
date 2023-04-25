import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comanda } from 'src/app/models/Comanda.model';
import { Mesa } from 'src/app/models/Mesa.model';
import {interval, Subscription} from "rxjs";
import {MesaService} from "../../services/Mesa.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [MessageService]
})
export class PedidosComponent implements OnInit,OnDestroy{

  private subscription: Subscription;

  listasMesas: Mesa[] = [];
  idPesquisaMesa: number = 0;
  listaComandas: Comanda[] = [];

  onSelect(mesa: Mesa): void {
    console.log(mesa.idMesa)
  }

  constructor(private route:Router, private toast:MessageService, private mesaService:MesaService){
    this.listaComandas = [];

    this.subscription = new Subscription();

    this.lerQuantidadeMesas();
  }

  ngOnInit(): void {
    this.subscription = interval(100000).subscribe(() => {
      this.lerQuantidadeMesas(); // substitua "minhaFuncao" pela função que deseja executar
    });

    this.lerQuantidadeMesas();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  lerQuantidadeMesas(){
    this.mesaService.lerMesas().subscribe(
      (listaMesas:Mesa[])=>{
        this.listasMesas = listaMesas;
      }
    );
  }

  verDetalheComandaMesa(mesa:Mesa) {
    localStorage.setItem("mesaParaLerComandaNaTelaPedido",JSON.stringify(mesa));
    this.route.navigate(['/Comanda']);
  }

  adicionarItemMesa(mesa:Mesa) {
    this.route.navigate(['/Cardapio']);
  }

  finalizarComandaMesa(mesa:Mesa) {
    this.toast.add({severity: 'success', summary: 'Mesa Finalizada', detail: 'Comanda enviada para a tela do caixa!'});
  }

  direcionamento(){
    this.route.navigate(['/Direcionamento'])
  }

}
