package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.ItemRepository;
import com.aeh.springboot.repositories.PedidoRepository;
import lombok.RequiredArgsConstructor;
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

    public Pedido salvarPedido(Pedido pedido){

        if(itemRepository.existsById(pedido.getItem().getIdItem()) && comandaRepository.existsById(pedido.getComanda().getIdComanda())){
            //Valida se a comanda está aberta
            Comanda comanda = comandaService.lerComanda(pedido.getComanda().getIdComanda());

            if(comanda.isComandaAberta()){

                pedido.setHoraResgistro(LocalTime.parse(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"))));
                pedido.setDataResgistro(LocalDate.parse(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu")),DateTimeFormatter.ofPattern("dd/MM/uuuu")));

                return(pedidoRepository.save(pedido));
            }
            else{
                return(null);
            }

        }else{
            return(null);
        }

    }

    public Pedido alterarPedido(Pedido pedido){
        if(pedidoRepository.existsById(pedido.getIdPedido())){
            if(itemRepository.existsById(pedido.getItem().getIdItem()) && comandaRepository.existsById(pedido.getComanda().getIdComanda())){
                //Valida se a comanda está aberta
                Comanda comanda = comandaService.lerComanda(pedido.getComanda().getIdComanda());

                if(comanda.isComandaAberta()){
                    return(pedidoRepository.save(pedido));
                }
                else{
                    return(null);
                }

            }else{
                return(null);
            }
        }
        else{
            return(null);
        }
    }

    public boolean deletarPedido(Pedido pedido){
        if(pedido.getIdPedido() >= 0){
            pedidoRepository.delete(pedido);
            return(true);
        }
        else{
            return(false);
        }
    }

}
