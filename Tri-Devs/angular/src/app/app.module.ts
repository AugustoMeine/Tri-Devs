import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//Importação do PrimeFaces
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CaixaComponent } from './caixa/caixa.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { ComandaMesaComponent } from './pedidos/comandaMesa/comandaMesa.component';
import { CardapioComponent } from './pedidos/cardapio/cardapio.component';
import { FinalizarComandaMesaComponent } from './pedidos/finalizarComandaMesa/finalizarComandaMesa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaixaComponent,
    CozinhaComponent,
    PedidosComponent,
    DirecionamentoComponent,
    ComandaMesaComponent,
    CardapioComponent,
    FinalizarComandaMesaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule,
    DataViewModule,
    ScrollPanelModule,
    ToastModule,
    TableModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
