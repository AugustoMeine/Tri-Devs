package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Item;
import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.ItemRepository;
import com.aeh.springboot.repositories.PedidoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final ItemRepository itemRepository;
    private final ComandaRepository comandaRepository;
    private final ComandaService comandaService;

    public Pedido lerPedido(long idPedido){
        return(pedidoRepository.findById(idPedido));
    }

    public List<Pedido> lerPedidos(){
        return(pedidoRepository.findAll());
    }

    public Pedido salvarPedido(long idComanda, long idItem, int quantidadeItem){

        //Verificar se a comanda existe
        if(!comandaRepository.existsById(idComanda)){
            return(null);
        }

        //verifica se a comanda está aberta
        if(!comandaRepository.findById(idComanda).isComandaAberta()){
            return(null);
        }

        //Verificar se o item existe
        if(!itemRepository.existsById(idItem)){
            return(null);
        }

        Comanda comandaCriacaoPedido = comandaRepository.findById(idComanda);
        Item itemCriacaoPedido = itemRepository.findById(idItem);
        Pedido pedidoCriacaoPedido = new Pedido();

        //Populando o pedido que será criado
        pedidoCriacaoPedido.setIdPedido(-1L);
        pedidoCriacaoPedido.setItem(itemCriacaoPedido);
        pedidoCriacaoPedido.setComanda(comandaCriacaoPedido);
        pedidoCriacaoPedido.setDataResgistro(LocalDate.parse(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu")),DateTimeFormatter.ofPattern("dd/MM/uuuu")));
        pedidoCriacaoPedido.setHoraResgistro(LocalTime.parse(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"))));
        pedidoCriacaoPedido.setQuantidadeItem(quantidadeItem);

        //Validar o status correto
        if(itemCriacaoPedido.isNecessitaPreparoCozinha()){
            pedidoCriacaoPedido.setStatus("Pendente preparo");
        }else{
            pedidoCriacaoPedido.setStatus("Pendente entrega");
        }

        //Salvar o pedido
        Pedido pedidoConfirmacao = pedidoRepository.save(pedidoCriacaoPedido);
        if(!pedidoRepository.existsById(pedidoConfirmacao.getIdPedido())){
            return(null);
        }

        //Calcular o valor total to pedido (ValorDoItem * quantidadeDoItem)
        float valorSomadoPedido = itemCriacaoPedido.getPrecoUnidade() * quantidadeItem;

        if(!comandaService.calcularValor(idComanda,valorSomadoPedido)){
            return(null);
        }

        return(pedidoConfirmacao);
    }

    public Pedido alterarStatusPedido(long idPedido, long idStatus){
        //validar se o pedido existe
        if(!pedidoRepository.existsById(idPedido)){
            return(null);
        }

        Pedido pedidoStatusAlterado = pedidoRepository.findById(idPedido);

        //Defini qual status foi solicitado através do pedido da tela
        if(idStatus == 1){
            pedidoStatusAlterado.setStatus("Pendente preparo");
        }
        else if(idStatus == 2){
            pedidoStatusAlterado.setStatus("Pendente entrega");
        }
        else if(idStatus == 3){
            pedidoStatusAlterado.setStatus("Finalizado");
        }
        else if(idStatus == 4){
            pedidoStatusAlterado.setStatus("Cancelado");
        }
        else{
            return(null);
        }

        return(pedidoRepository.save(pedidoStatusAlterado));
    }
}
