package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Item;
import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.MesaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComandaService {

    private final ComandaRepository comandaRepository;
    private final MesaRepository mesaRepository;

    public Comanda lerComanda(long idComanda){
        return(comandaRepository.findById(idComanda));
    }

    public List<Comanda> lerComandas(){
        return(comandaRepository.findAll());
    }

    public Comanda salvarComanda(Comanda comanda){
        if(mesaRepository.existsById(comanda.getIdMesa()) && (comandaRepository.localizarComandasPorMesa(comanda.getIdMesa()).size() == 0)){
            //Inicia com o valor zerado, o valor é incrementado a cada inclusão de pedido vinculada a comanda
            comanda.setPrecoTotalPedido(0L);
            comanda.setComandaAberta(true);
            return(comandaRepository.save(comanda));
        }
        else {
            return(null);
        }

    }

    public Comanda alterarComanda(Comanda comanda){
        if(comandaRepository.existsById(comanda.getIdComanda())){
            return(comandaRepository.save(comanda));
        }
        else{
            return(null);
        }
    }

    public boolean deletarComanda(Comanda comanda){
        if(comanda.getIdComanda() >= 0){
            comandaRepository.delete(comanda);
            return(true);
        }
        else{
            return(false);
        }
    }

}
