import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/login/Usuario.service';

@Component({
  selector: 'app-gerenciamento-usuario',
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css']
})
export class GerenciamentoUsuarioComponent implements OnInit{
  listaUsuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService){
    usuarioService.lerUsuarios().subscribe(
      {
        next:(data:Usuario[])=>{
          if(data){
            console.log("Lista Retornada com sucesso!");
            data.forEach(
              (usuario:Usuario)=>{
                this.listaUsuarios.push(usuario); 
              }
            )
                                         
          }else{
            console.log("Lista não existente!");
            console.log(data);
          }
        },
        error:(erro:any)=>{
          console.log("Falha na conexão com a API: ");
          console.log(erro);
        }
        
      }
    );

    console.log(this.listaUsuarios);
  }

  ngOnInit(): void {      
  }
}