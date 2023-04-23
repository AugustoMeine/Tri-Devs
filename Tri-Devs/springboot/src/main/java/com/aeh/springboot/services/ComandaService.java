package com.aeh.springboot.services;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.MesaRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComandaService {

    private final ComandaRepository comandaRepository;
    private final MesaRepository mesaRepository;
    private final MesaService mesaService;
    private final Logger log = LoggerFactory.getLogger(ComandaService.class);

    public Comanda lerComanda(long idComanda){
        return(comandaRepository.findById(idComanda));
    }

    public List<Comanda> lerComandas(){
        return(comandaRepository.findAll());
    }

    public Comanda salvarComanda(long idMesa,Comanda comanda){
        //Valida se a mesa existe
        if(mesaRepository.existsById(idMesa)){
            //valida se tem alguma comanda aberta para a mesa
            if((comandaRepository.localizarComandasPorMesa(idMesa).size() == 0)){
                //Inicia com o valor zerado, o valor é incrementado a cada inclusão de pedido vinculada a comanda
                comanda.setPrecoTotalPedido(0F);
                comanda.setComandaAberta(true);

                //Cria uma mesa para ser salva (Alterando o status de ocupada dela)
                Mesa mesaAtualizada = mesaRepository.findById(idMesa);

                mesaAtualizada.setEstaOcupada(true);
                if(mesaService.alterarMesa(idMesa,mesaAtualizada) == null){
                    return(null);
                }

                comanda.setMesa(mesaAtualizada);
                return(comandaRepository.save(comanda));

            }else{
                return(null);
            }
        }
        else {
            return(null);
        }

    }

    public boolean calcularValor(long idComanda, float valor){
        if(!comandaRepository.existsById(idComanda)){
            return(false);
        }

        Comanda comandaCalculadaOValor = comandaRepository.findById(idComanda);

        float valorAtual = comandaCalculadaOValor.getPrecoTotalPedido();

        comandaCalculadaOValor.setPrecoTotalPedido((float)Math.round((comandaCalculadaOValor.getPrecoTotalPedido() + valor) * 100) / 100);

        //Valida se o valor correto foi salvo corretamente
        if(comandaRepository.save(comandaCalculadaOValor).getPrecoTotalPedido() == valorAtual + valor){
            return(true);
        }else{
            return(false);
        }

    }

    public Comanda finalizarComanda(long idComanda){

        //valida se a comanda existe
        if(!comandaRepository.existsById(idComanda)){
            return(null);
        }
        //valida se a comanda está aberta, porque se estiver fechada não vai necessário realizar nenhuma ação
        if(!comandaRepository.findById(idComanda).isComandaAberta()){
            return(null);
        }

        //Encerra a comanda e desocupa a mesa
        Comanda comandaFinalizada = comandaRepository.findById(idComanda);


        //validação e atualização da mesa
        Mesa mesaAtualizada = mesaRepository.findById(comandaFinalizada.getMesa().getIdMesa());
        mesaAtualizada.setEstaOcupada(false);

        if(mesaService.alterarMesa(comandaFinalizada.getMesa().getIdMesa(),mesaAtualizada) == null){
            return(null);
        }

        //Encerramento da comanda
        comandaFinalizada.setComandaAberta(false);

        comandaFinalizada.setMesa(mesaAtualizada);
        return(comandaRepository.save(comandaFinalizada));

    }

}
