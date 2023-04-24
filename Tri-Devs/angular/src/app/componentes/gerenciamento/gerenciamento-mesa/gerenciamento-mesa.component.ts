import {Component, OnDestroy, OnInit} from '@angular/core';
import {Mesa} from "../../../models/Mesa.model";
import {interval, Subscription} from "rxjs";
import {MesaService} from "../../../services/Mesa.service";

@Component({
  selector: 'app-gerenciamento-mesa',
  templateUrl: './gerenciamento-mesa.component.html',
  styleUrls: ['./gerenciamento-mesa.component.css']
})
export class GerenciamentoMesaComponent implements OnInit,OnDestroy{
  private subscription: Subscription;

  cadastroVisivel:boolean = false;
  alterarVisivel:boolean = false;
  mesaCadastro: Mesa;
  mesaAlteracao: Mesa;
  listaMesas: Mesa[] = [];



  constructor(private mesaService: MesaService){
    this.mesaCadastro = new Mesa(-1,false);
    this.mesaAlteracao = new Mesa(-1,false);
    this.subscription = new Subscription();
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
    if(!this.alterarVisivel){
      this.lerListaMesa();
    }
  }

  lerListaMesa(){
    this.mesaService.lerMesas().subscribe(
      (listaMesasRetornadas: Mesa[])=>{
        this.listaMesas = listaMesasRetornadas;
      }
    );
  }

  alterarModel(mesa: Mesa){
    this.mesaAlteracao = mesa;
    this.alterarVisivel = true;
  }

  alterarMesa(mesa: Mesa){
    this.mesaService.AtualizarMesa(mesa.idMesa,mesa).subscribe(
      (mesaRetornada: Mesa)=>{
        console.log('Mesa alterada: ' + mesaRetornada);
      }
    );

    this.alterarVisivel = false;
  }


  realizarCadastro(){
    this.mesaService.salvarMesa(new Mesa(-1, false)).subscribe(
      (mesaRetornada:Mesa)=>{
        console.log('Mesa Cadastrada' + mesaRetornada);
      }
    );

    this.lerListaMesa();

    this.cadastroVisivel = false;
  }

  excluirMesa(mesa: Mesa){
    this.mesaService.deletarMesa(mesa.idMesa).subscribe(
      (mesaRetornada:any)=>{
        console.log('Mesa excluida: ' + mesaRetornada);
      }
    );
  }

}
