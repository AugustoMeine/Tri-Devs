//Importações básicas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ToastModule } from 'primeng/toast';


//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { DirecionamentoComponent } from './componentes/direcionamento/direcionamento.component';
import { CozinhaComponent } from './componentes/cozinha/cozinha.component';
import { CaixaComponent } from './componentes/caixa/caixa.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
// import { LoginComponent } from './login/login.component';
// import { CaixaComponent } from './caixa/caixa.component';
// import { CozinhaComponent } from './cozinha/cozinha.component';
// import { PedidosComponent } from './pedidos/pedidos.component';
// import { DirecionamentoComponent } from './direcionamento/direcionamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirecionamentoComponent,
    CozinhaComponent,
    CaixaComponent,
    PedidosComponent
    // LoginComponent,
    // CaixaComponent,
    // CozinhaComponent,
    // PedidosComponent,
    // DirecionamentoComponent
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
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
