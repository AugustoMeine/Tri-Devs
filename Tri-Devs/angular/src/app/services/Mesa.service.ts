import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mesa} from "../models/Mesa.model";

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient){

  }

  public lerMesas():Observable<any>{
    return(this.http.get('http://localhost:4321/Mesa/'));
  }

  public lerMesa(idMesa: number):Observable<any>{
    return(this.http.get('http://localhost:4321/Mesa/' + idMesa));
  }

  public salvarMesa(mesa: Mesa):Observable<any>{
    return(this.http.post('http://localhost:4321/Mesa/',mesa));
  }

  public AtualizarMesa(idMesa:number, mesa:Mesa):Observable<any>{
    return(this.http.put('http://localhost:4321/Mesa/'+ idMesa,mesa));
  }

  public deletarMesa( idMesa:number):Observable<any>{
    return(this.http.get('http://localhost:4321/Mesa/Deletar/'+ idMesa));
  }

  public lerPedidosVinculados(idMesa:number):Observable<any>{
    return(this.http.get('http://localhost:4321/Mesa/LerPedidos'+ idMesa));
  }
}
