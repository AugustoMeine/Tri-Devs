import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/Usuario.service';

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

  ngOnInit(): void {
  }

  cadastrarModel(){
    this.cadastroVisivel = true;
  }

  finalizarCadastro(){
    this.usuarioService.salvarUsuario(new Usuario(-1,this.nome,this.login,this.senha,"","")).subscribe(
      {
      next:(data:Usuario) =>{
        if(data){
          console.log("Usuario cadastrado com sucesso!")
        }
        else{
          console.log("Usuario não cadastrado!")
        }
      },
      error:(erro:any)=>{
        console.log("Falha na conexão com a API: ");
        console.log(erro);
      }
      }
    );
    // Atualiza a lista de usuários
    this.usuarioService.lerUsuarios().subscribe(
      {
        next:(data:Usuario[])=>{
          if(data){
            this.listaUsuarios = []
            data.forEach(
              (usuario:Usuario)=>{
                this.listaUsuarios.push(usuario);
              }
            )
          }else{
            console.log("Não existente usuários cadastrados!");
          }
        },
        error:(erro:any)=>{
          console.log("Falha na conexão com a API: ");
          console.log(erro);
        }
      }
    );

    this.cadastroVisivel = false;
  }

}
