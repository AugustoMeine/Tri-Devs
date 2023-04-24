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

    public Mesa alterarMesa(long idMesa,Mesa mesa){

        if(!mesaRepository.existsById(idMesa)){
            return(null);
        }

        Mesa mesaFinalizada = mesaRepository.findById(idMesa);

        mesaFinalizada.setEstaOcupada(mesa.isEstaOcupada());

        return(mesaRepository.save(mesaFinalizada));
    }

    public boolean deletarMesa(long idMesa){
        //Valida se existe, antes de excluir
        if(!mesaRepository.existsById(idMesa)){
            return(false);
        }

        mesaRepository.deleteById(idMesa);
        return(!mesaRepository.existsById(idMesa)); //Valida se existe e como apagou, ele inverte.

    }

    public long lerPedidosVinculados(long idMesa){

        if(!mesaRepository.existsById(idMesa)){
            return(0);
        }

        return(mesaRepository.lerPedidosVinculados(idMesa));
    }

}
