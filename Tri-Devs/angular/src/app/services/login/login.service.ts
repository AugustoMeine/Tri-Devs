import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public logar(login:string, senha:string):Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/Login/'+login+'/'+senha));
  }


}
