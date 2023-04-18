package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Mesa;
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
        if(mesaRepository.existsById(comanda.getMesa().getIdMesa())){
            Mesa mesa = mesaRepository.findById(comanda.getMesa().getIdMesa());

            comanda.setMesa(mesa);
            return(comandaRepository.save(comanda));
        }
        else {
            return(null);
        }

    }

    public Comanda alterarComanda(Comanda comanda){
        if(comanda.getIdComanda() >= 0){
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
