package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.MesaRepository;
import com.aeh.springboot.services.ComandaService;
import com.aeh.springboot.services.MesaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Comanda")
@CrossOrigin(origins = {"http://localhost:4200","*"})
@RequiredArgsConstructor
public class ComandaController {

    private final ComandaService comandaService;
    private final MesaService mesaService;
    private final MesaRepository mesaRepository;

    @GetMapping("/")
    public ResponseEntity<List<Comanda>> lerComandas(){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComandas()));
    }

    @GetMapping("/{idComanda}")
    public ResponseEntity<Comanda> lerComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComanda(idComanda)));
    }

    @PostMapping("/{idMesa}")
    public ResponseEntity<Comanda> salvarComanda(@PathVariable long idMesa,@RequestBody Comanda comanda){

        if(mesaRepository.existsById(idMesa)){
            comanda.setMesa(mesaService.lerMesa(idMesa));

            return(ResponseEntity.status(HttpStatus.CREATED).body(comandaService.salvarComanda(comanda)));
        }
        else{
            return(null);
        }

    }

    @GetMapping("/Finalizar/{idComanda}")
    public ResponseEntity<Comanda> atualizarComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.CREATED).body(comandaService.finalizarComanda(idComanda)));
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deletarComanda(@RequestBody Comanda comanda){

        if(comandaService.deletarComanda(comanda)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Comanda deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Comanda não deletado!"));
        }
    }
}
