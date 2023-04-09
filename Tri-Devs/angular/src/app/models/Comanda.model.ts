import { Pedido } from './Pedido.model';

export class Comanda{
    idComanda: number;
    listaPedidos: Pedido[];
    precoTotal: number;
    idMesa: number;
    comandaAberta: boolean;
    horaPedidoMaisAntigoNaoPreparado: string;
    
    constructor(idComanda: number, listaPedidos: Pedido[], idMesa:number){
        this.idComanda = idComanda;
        this.listaPedidos = listaPedidos;       
        this.precoTotal = 0;       
        this.idMesa = idMesa; 
        this.comandaAberta = true; //A comanda fica aberta até o cliente pagar, no qual posteriormente seria fechada e a mesa liberada para uma nova comanda.
        this.horaPedidoMaisAntigoNaoPreparado = '';

        //Calcula o valor total dos pedidos
        this.listaPedidos.forEach(
            (pedidoAux) =>{
                this.precoTotal += (pedidoAux.item.precoUnidade * pedidoAux.quantidadeItem);
            }
        );

        //Atualiza a hora do pedido mais antigo ainda não preparado
        this.listaPedidos.forEach(
            (pedidoAux) =>{
                //Valida o pedido em sequência de inclusão, quando localicar um que não foi atendido pego a hora de registro.
                //OBS: Os Pedidos são inseridos em ordem temporal crescente, logo o primeiro da lista vai ser o mais antigo adicionado.
                if(pedidoAux.status === 'Pendente Preparo'){
                    this.horaPedidoMaisAntigoNaoPreparado = pedidoAux.horaResgistro;
                    return;
                }
            }
        );        
    }

    adicionaPedidos(novaListaPedidos:Pedido[]){      
        novaListaPedidos.forEach(
            (pedidoAux) =>{
                this.listaPedidos.push(pedidoAux); //Adiciona os pedidos na lista
                this.precoTotal += (pedidoAux.item.precoUnidade * pedidoAux.quantidadeItem); //Calcula o valor do pedido e adiciona no valor Total
            }
        );

        this.horaPedidoMaisAntigoNaoPreparado = '';
        this.listaPedidos.forEach(
            (pedidoAux) =>{
                //Valida o pedido em sequência de inclusão, quando localicar um que não foi atendido pego a hora de registro.
                //OBS: Os Pedidos são inseridos em ordem temporal crescente, logo o primeiro da lista vai ser o mais antigo adicionado.
                if(pedidoAux.status === 'Pendente Preparo'){
                    this.horaPedidoMaisAntigoNaoPreparado = pedidoAux.horaResgistro;
                    return;
                }
            }
        );

    }
    
}