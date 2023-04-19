import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  public logar(login:string, senha:string):Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/Login/'+login+'/'+senha));
  }

  public lerUsuarios():Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/'));
  }


}
