package com.aeh.springboot.services;

import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.repositories.PedidoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PedidoService {

    private PedidoRepository pedidoRepository;

    public Pedido lerPedido(long idPedido){
        return(pedidoRepository.findById(idPedido));
    }

    public List<Pedido> lerPedidos(){
        return(pedidoRepository.findAll());
    }

    public Pedido salvarPedido(Pedido pedido){
        return(pedidoRepository.save(pedido));
    }

    public Pedido alterarPedido(Pedido pedido){
        if(pedido.getIdPedido() >= 0){
            return(pedidoRepository.save(pedido));
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
