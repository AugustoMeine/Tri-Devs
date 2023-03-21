import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"",component:CozinhaComponent},
  {path:"Direcionamento" , component:DirecionamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
