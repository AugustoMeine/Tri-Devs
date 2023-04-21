package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Item;
import com.aeh.springboot.services.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/Item")
@CrossOrigin(origins = {"http://localhost:4200","*"})
@RequiredArgsConstructor
public class ItemController{

    private final ItemService itemService;

    @GetMapping("/")
    public ResponseEntity<List<Item>> lerItens(){
        return(ResponseEntity.status(HttpStatus.OK).body(itemService.lerItems()));
    }

    @GetMapping("/{idItem}")
    public ResponseEntity<Item> lerItem(@PathVariable long idItem){
        return(ResponseEntity.status(HttpStatus.OK).body(itemService.lerItem(idItem)));
    }

    @PostMapping("/")
    public ResponseEntity<Item> salvarItem(@RequestBody Item item){
        return(ResponseEntity.status(HttpStatus.CREATED).body(itemService.salvarItem(item)));
    }

    @PutMapping("/")
    public ResponseEntity<Item> atualizarItem(@RequestBody Item item){
        return(ResponseEntity.status(HttpStatus.GONE).body(itemService.alterarItem(item)));
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deletarItem(@RequestBody Item item){

        if(itemService.deletarItem(item)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Item deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Item não deletado!"));
        }
    }
    
}
