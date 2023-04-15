//Imports angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports de componentes
import { LoginComponent } from './componentes/login/login.component';
import { CozinhaComponent } from './componentes/cozinha/cozinha.component';
import { DirecionamentoComponent } from './componentes/direcionamento/direcionamento.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Cozinha",component:CozinhaComponent},
  {path:"Direcionamento" , component:DirecionamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
