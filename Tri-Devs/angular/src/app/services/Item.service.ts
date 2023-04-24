import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../models/Item.model";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {

  }

  public lerItens(): Observable<any> {
    return(this.http.get('http://localhost:4321/Item/'));
  }

  public lerItem(idItem: number): Observable<any> {
    return(this.http.get('http://localhost:4321/Item/' + idItem));
  }

  public salvarItem(item: Item): Observable<any> {
    return(this.http.post('http://localhost:4321/Item/', item));
  }

  public atualizarItem(item: Item): Observable<any> {
    return(this.http.put('http://localhost:4321/Item/', item));
  }

  public deletarItem(idItem: number): Observable<any> {
    return(this.http.get('http://localhost:4321/Item/Deletar/' + idItem));
  }

}
