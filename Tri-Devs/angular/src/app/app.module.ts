import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importação do PrimeFaces
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CaixaComponent } from './caixa/caixa.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaixaComponent,
    CozinhaComponent,
    PedidosComponent,
    DirecionamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
