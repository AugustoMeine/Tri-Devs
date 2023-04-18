package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.services.ComandaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Comanda")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ComandaController {

    private final ComandaService comandaService;

    @GetMapping({"/",""})
    public ResponseEntity<List<Comanda>> lerComandas(){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComandas()));
    }

    @GetMapping("/{idComanda}")
    public ResponseEntity<Comanda> lerComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComanda(idComanda)));
    }

    @PostMapping({"/",""})
    public ResponseEntity<Comanda> salvarComanda(@RequestBody Comanda comanda){
        return(ResponseEntity.status(HttpStatus.CREATED).body(comandaService.salvarComanda(comanda)));
    }

    @DeleteMapping({"/",""})
    public ResponseEntity<String> deletarComanda(@RequestBody Comanda comanda){

        if(comandaService.deletarComanda(comanda)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Comanda deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Comanda não deletado!"));
        }
    }
}
