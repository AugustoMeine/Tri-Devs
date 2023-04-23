package com.aeh.springboot.services;

import com.aeh.springboot.models.Item;
import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.repositories.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public Item lerItem(long idItem){
        return(itemRepository.findById(idItem));
    }

    public List<Item> lerItems(){
        return(itemRepository.findAll());
    }

    public Item salvarItem(long idItem,Item item){

        if(itemRepository.existsById(idItem)){
            return(null);
        }

        return(itemRepository.save(item));
    }

    public Item alterarItem(Item item){
        //valida se existe o item no banco
        if(!itemRepository.existsById(item.getIdItem())){
            return (null);
        }

        Item itemFinalizado = itemRepository.findById(item.getIdItem());

        itemFinalizado.setNome(item.getNome());
        itemFinalizado.setPrecoUnidade(item.getPrecoUnidade());
        itemFinalizado.setNecessitaPreparoCozinha(item.isNecessitaPreparoCozinha());

        return(itemRepository.save(itemFinalizado));
    }

    public boolean deletarItem(long idItem){
        //valida se existe o item no banco
        if(!itemRepository.existsById(idItem)){
            return (false);
        }

        itemRepository.deleteById(idItem);
        return(!itemRepository.existsById(idItem));
    }
}
