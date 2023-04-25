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
  listaComandas: Comanda[] = [];

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

  visualizarPedidosDaMesa(mesa:Mesa) {
    localStorage.removeItem("mesaParaLerPedidosNaTelaDeComanda");
    localStorage.setItem("mesaParaLerPedidosNaTelaDeComanda",JSON.stringify(mesa));
    this.route.navigate(['/Comanda']);
  }

  adicionarItemMesa(mesa:Mesa) {
    localStorage.removeItem("mesaParaAdicionarPedidosNaTelaDeComanda");
    localStorage.setItem("mesaParaAdicionarPedidosNaTelaDeComanda",JSON.stringify(mesa));
    this.route.navigate(['/Cardapio']);
  }

  finalizarComandaMesa(mesa:Mesa) {
    this.toast.add({severity: 'success', summary: 'Mesa Finalizada', detail: 'Comanda enviada para a tela do caixa!'});
  }

  direcionamento(){
    this.route.navigate(['/Direcionamento'])
  }

}
