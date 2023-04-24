import {Component, OnDestroy, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/Usuario.service';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-gerenciamento-usuario',
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css']
})
export class GerenciamentoUsuarioComponent implements OnInit, OnDestroy{

  private subscription: Subscription;
  listaUsuarios: Usuario[] = [];
  cadastroVisivel:boolean = false;
  alterarVisivel:boolean = false;
  usuarioCadastro: Usuario;
  usuarioAlteracao: Usuario;
  statusSelecionado:number = -1;


  constructor(private usuarioService: UsuarioService){

    this.usuarioCadastro = new Usuario(-1,'','','','','','');
    this.usuarioAlteracao = new Usuario(-1,'','','','','','');
    this.subscription = new Subscription();

    this.lerListaUsuarios();

  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.x(); // substitua "minhaFuncao" pela função que deseja executar
    });

    this.x();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  x(){
    if(this.alterarVisivel){

    }else{
      this.lerListaUsuarios()
    }

  }

  lerListaUsuarios(){
    this.usuarioService.lerUsuarios().subscribe(
      (listaUsuarios)=>{
        this.listaUsuarios = listaUsuarios;
      }
    );
  }

  cadastrarModel(){
    this.cadastroVisivel = true;
  }

  realizarCadastro(){

    this.usuarioService.salvarUsuario(this.statusSelecionado,this.usuarioCadastro).subscribe(
      (retorno:any)=>{
        console.log('Usuario Cadastrado' + retorno);
      }
    );

    this.lerListaUsuarios();

    this.cadastroVisivel = false;
  }

  alterarModel(usuario: Usuario){
    this.usuarioAlteracao = usuario;
    this.alterarVisivel = true;
  }

  alterarUsuario(usuario:Usuario){
    this.usuarioService.atualizarUsuario(this.usuarioAlteracao).subscribe(
      (retorno:any)=>{
        console.log("Usuario alterado: " + retorno);
      }
    );

    this.alterarVisivel = false;
  }

  excluirUsuario(usuario: Usuario){
    this.usuarioService.desligarUsuario(usuario.idUsuario).subscribe(
      (retorno:any)=>{
        console.log('Usuario deletado: ' + retorno)
      }
    );

    this.lerListaUsuarios();
  }

}
