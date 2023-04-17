//Importações básicas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Importação do PrimeFaces
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';


//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { DirecionamentoComponent } from './componentes/direcionamento/direcionamento.component';
import { CozinhaComponent } from './componentes/cozinha/cozinha.component';
import { CaixaComponent } from './componentes/caixa/caixa.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirecionamentoComponent,
    CozinhaComponent,
    CaixaComponent,
    PedidosComponent
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
    ToastModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
