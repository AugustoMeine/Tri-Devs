//Imports angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports de componentes
import { LoginComponent } from './componentes/login/login.component';
import { CozinhaComponent } from './componentes/cozinha/cozinha.component';
import { DirecionamentoComponent } from './componentes/direcionamento/direcionamento.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CaixaComponent } from './componentes/caixa/caixa.component';
import { CadastroComponent } from './componentes/cadastro/cadastro/cadastro.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Cozinha",component:CozinhaComponent},
  {path:"Direcionamento" , component:DirecionamentoComponent},
  {path:"Pedido", component:PedidosComponent},
  {path:"Caixa",component:CaixaComponent},
  {path:"Cadastro", component:CadastroComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
