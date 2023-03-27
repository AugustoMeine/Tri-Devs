import { PedidosComponent } from './pedidos/pedidos.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaMesaComponent } from './pedidos/comandaMesa/comandaMesa.component';
import { CardapioComponent } from './pedidos/cardapio/cardapio.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Cozinha",component:CozinhaComponent},
  {path:"Direcionamento",component:DirecionamentoComponent},
  {path:"Pedidos",component:PedidosComponent},
  {path:"Comanda",component:ComandaMesaComponent},
  {path:"Cardapio",component:CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
