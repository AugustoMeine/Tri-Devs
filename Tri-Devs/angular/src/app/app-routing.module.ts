import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaComponent } from './caixa/caixa.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Cozinha",component:CozinhaComponent},
  {path:"Caixa",component:CaixaComponent},
  {path:"Direcionamento" , component:DirecionamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
