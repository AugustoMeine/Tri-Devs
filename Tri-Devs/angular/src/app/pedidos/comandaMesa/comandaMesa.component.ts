import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-comandaMesa',
  templateUrl: './comandaMesa.component.html',
  styleUrls: ['./comandaMesa.component.css']
})
export class ComandaMesaComponent {
  itens: any[] = [];

  mostrarDetalhes = false;

  mostrarDetalhesPedido() {
    this.mostrarDetalhes = true;
  }

  adicionarItens(novosItens: any[]) {
    this.itens = [...this.itens, ...novosItens];
  }
}
