package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Item;
import com.aeh.springboot.repositories.ItemRepository;
import com.aeh.springboot.services.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ItemServiceTest {

    @Mock
    ItemRepository itemRepository;

    @InjectMocks
    ItemService itemService;

    Item item;
    long idItem;

    @BeforeEach
    public void setUp(){
        item.setIdItem(1);
        item.setNome("Coca-cola");
        item.setPrecoUnidade(10.50F);
        item.setNecessitaPreparoCozinha(false);

        this.idItem = 2;
    }

    public Item lerItem(){
        return(itemRepository.findById(this.idItem));
    }

    public List<Item> lerItems(){
        return(itemRepository.findAll());
    }

    public Item salvarItem(){

        if(itemRepository.existsById(this.idItem)){
            return(null);
        }

        return(itemRepository.save(this.item));
    }

    public Item alterarItem(){
        //valida se existe o item no banco
        if(!itemRepository.existsById(this.item.getIdItem())){
            return (null);
        }

        Item itemFinalizado = itemRepository.findById(this.item.getIdItem());

        itemFinalizado.setNome(this.item.getNome());
        itemFinalizado.setPrecoUnidade(this.item.getPrecoUnidade());
        itemFinalizado.setNecessitaPreparoCozinha(this.item.isNecessitaPreparoCozinha());

        return(itemRepository.save(itemFinalizado));
    }

    public boolean deletarItem(){
        //valida se existe o item no banco
        if(!itemRepository.existsById(this.idItem)){
            return (false);
        }

        itemRepository.deleteById(this.idItem);
        return(!itemRepository.existsById(this.idItem));
    }
}
