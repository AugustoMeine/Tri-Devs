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
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitterModule } from 'primeng/splitter';


//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { DirecionamentoComponent } from './componentes/direcionamento/direcionamento.component';
import { CozinhaComponent } from './componentes/cozinha/cozinha.component';
import { CaixaComponent } from './componentes/caixa/caixa.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { GerenciamentoComponent } from './componentes/gerenciamento/gerenciamento.component';
import { GerenciamentoUsuarioComponent } from './componentes/gerenciamento/gerenciamento-usuario/gerenciamento-usuario.component';
import { GerenciamentoItemComponent } from './componentes/gerenciamento/gerenciamento-item/gerenciamento-item.component';
import { GerenciamentoMesaComponent } from './componentes/gerenciamento/gerenciamento-mesa/gerenciamento-mesa.component';
import { VisualizarComandaComponent } from './componentes/pedidos/visualizar-comanda/visualizar-comanda.component';
import { CardapioComponent } from './componentes/pedidos/cardapio/cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirecionamentoComponent,
    CozinhaComponent,
    CaixaComponent,
    PedidosComponent,
    GerenciamentoComponent,
    GerenciamentoUsuarioComponent,
    GerenciamentoItemComponent,
    GerenciamentoMesaComponent,
    VisualizarComandaComponent,
    CardapioComponent
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
    HttpClientModule,
    ScrollPanelModule,
    TableModule,
    BadgeModule,
    MegaMenuModule,
    InputTextModule,
    DialogModule,
    RadioButtonModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
