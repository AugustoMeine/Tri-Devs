import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {

  }

  lerItens():Observable<any>{
    return(this.http.get('http://localhost:4321/Item/'));
  }

}
