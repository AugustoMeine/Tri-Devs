import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public logar(login: string, senha:string):Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/' + login +'/' + senha));
  }


}
