import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario/Usuario.service';

@Component({
  selector: 'app-gerenciamento-usuario',
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css']
})
export class GerenciamentoUsuarioComponent implements OnInit{
  listaUsuarios: Usuario[] = [];
  usuarioSelecionado: Usuario;
  cadastroVisivel:boolean = false;

  idUsuario: number;
  nome:string;
  login:string
  senha:string;
  dataCriacao:string;
  dataDesligamento:string;

  constructor(private usuarioService: UsuarioService){
    this.idUsuario = -1;
    this.nome = '';
    this.login = '';
    this.senha = '';
    this.dataCriacao = '';
    this.dataDesligamento = '';

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

    this.usuarioSelecionado = this.listaUsuarios[0];
  }

  cadastrarModel(){
    this.cadastroVisivel = true;
  }

  finalizarCadastro(){
  }

  ngOnInit(): void {
  }
}
