package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.repositories.ComandaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComandaService {

    private final ComandaRepository comandaRepository;

    public Comanda lerComanda(long idComanda){
        return(comandaRepository.findById(idComanda));
    }

    public List<Comanda> lerComandas(){
        return(comandaRepository.findAll());
    }

    public Comanda salvarComanda(Comanda comanda){
        return(comandaRepository.save(comanda));
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
