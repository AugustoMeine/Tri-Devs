import { PedidosComponent } from './pedidos/pedidos.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Cozinha",component:CozinhaComponent},
  {path:"Pedidos",component:PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
