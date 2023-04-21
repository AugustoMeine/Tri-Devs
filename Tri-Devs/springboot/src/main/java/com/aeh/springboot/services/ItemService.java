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

    public Item salvarItem(Item item){
        return(itemRepository.save(item));
    }

    public Item alterarItem(Item item){
        if(itemRepository.existsById(item.getIdItem())){
            return(itemRepository.save(item));
        }
        else{
            return(null);
        }
    }

    public boolean deletarItem(Item item){
        if(item.getIdItem() >= 0){
            itemRepository.delete(item);
            return(true);
        }
        else{
            return(false);
        }
    }
}
