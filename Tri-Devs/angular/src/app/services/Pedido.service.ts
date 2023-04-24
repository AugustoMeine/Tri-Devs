import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient){

  }

  public lerPedidos():Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/'));
  }

  public lerPedidosDaComanda(idComanda: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/Comanda/' + idComanda));
  }


  public lerPedidosPendentePreparo():Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/PendentePreparo/'));
  }

  public lerPedido(idPedido: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/' + idPedido));
  }

  public salvarPedido(idComanda:number, idItem: number, quantidadeItem: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/' + idComanda + '/' + idItem + '/'+ quantidadeItem));
  }

  public alterarStatusPedido(idPedido: number, idStatus: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Pedido/AlterarStatus/' + idPedido + '/' +idStatus));
  }

}
