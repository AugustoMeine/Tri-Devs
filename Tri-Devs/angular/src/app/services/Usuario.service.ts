import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../models/Usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  public lerUsuarios():Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/'));
  }

  public lerUsuario(idUsuario: number): Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/'+idUsuario));
  }

  public validarLogin(login:string, senha:string):Observable<any>{
    return(this.http.get('http://localhost:4321/Usuario/Login/'+login+'/'+senha));
  }

  public salvarUsuario(idStatus:number, usuario: Usuario){
    return(this.http.post('http://localhost:4321/Usuario/'+idStatus, usuario));
  }

  public atualizarUsuario(usuario: Usuario){
    return(this.http.put('http://localhost:4321/Usuario/', usuario));
  }

  public deletarUsuario(idUsuario: number){
    return(this.http.get('http://localhost:4321/Usuario/Deletar/'+ idUsuario));
  }

}
