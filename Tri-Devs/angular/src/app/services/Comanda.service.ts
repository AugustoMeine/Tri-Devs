import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comanda} from "../models/Comanda.model";

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  constructor(private http:HttpClient){

  }

  public lerComandas():Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/'));
  }

  public lerComandasAbertas():Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/Abertas/'));
  }

  public lerComandasAbertasComPedidosPendentePreparo():Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/Abertas/PendentePreparo/'));
  }

  public lerComanda(idComanda:number):Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/'+idComanda));
  }

  public consultarComandaDaMesa(idMesa: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/consultarComandaDaMesa/'+idMesa));
  }


  public salvarComanda(idMesa: number, comanda: Comanda):Observable<any>{
    return(this.http.post('http://localhost:4321/Comanda/'+idMesa, comanda));
  }

  public finalizarComanda(idComanda: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Comanda/Finalizar/'+ idComanda));
  }

}
