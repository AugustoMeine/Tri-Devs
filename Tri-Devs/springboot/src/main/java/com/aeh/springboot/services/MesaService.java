package com.aeh.springboot.services;

import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.repositories.MesaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MesaService {

    private final MesaRepository mesaRepository;

    public Mesa lerMesa(long idMesa){
        return(mesaRepository.findById(idMesa));
    }

    public List<Mesa> lerMesas(){
        return(mesaRepository.findAll());
    }

    public Mesa salvarMesa(Mesa mesa){
        return(mesaRepository.save(mesa));
    }

    public Mesa alterarMesa(Mesa mesa){
        if(mesaRepository.existsById(mesa.getIdMesa())){
            return(mesaRepository.save(mesa));
        }
        else{
            return(null);
        }
    }

    public boolean deletarMesa(Mesa mesa){
        if(mesa.getIdMesa() >= 0){
            mesaRepository.delete(mesa);
            return(true);
        }
        else{
            return(false);
        }
    }

}
