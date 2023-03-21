import { Pedido } from './Pedido.model';

export class Mesa{
    idMesa: number;
    preco: number;
    pedidos: Pedido[];

    constructor(idMesa:number, pedidos:Pedido[]){
        this.idMesa = idMesa;
        this.pedidos = pedidos;

        //O preço será calculado posterior a instancia do objeto
        this.preco = -1;
    }

    popularPrecoComPedidosExistentes(){

        //Zera o valor do preço para popular novamente
        this.preco = 0;
        this.pedidos.forEach(
            (ped) =>{
                this.preco += ped.preco;
            }
        );
    }

    atualizarPedidos(pedidos:Pedido[]){
        this.pedidos = pedidos;

        //Zera o valor do preço para popular novamente
        this.preco = 0;
        pedidos.forEach(
            (ped) =>{
                this.preco += ped.preco;
            }
        );
    }
}