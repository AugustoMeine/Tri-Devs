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

    @GetMapping("/")
    public ResponseEntity<List<Comanda>> lerComandas(){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComandas()));
    }

    @GetMapping("/Abertas/")
    public ResponseEntity<List<Comanda>> lerComandasAbertas(){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComandasAbertas()));
    }
    @GetMapping("/Abertas/PendentePreparo/")
    public ResponseEntity<List<Comanda>> lerComandasAbertasComPedidosPendentePreparo(){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComandasAbertasComPedidosPendentePreparo()));
    }

    @GetMapping("/{idComanda}")
    public ResponseEntity<Comanda> lerComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.lerComanda(idComanda)));
    }

    @GetMapping("/consultarComandaDaMesa/{idMesa}")
    public ResponseEntity<Comanda> consultarComandaDaMesa(@PathVariable long idMesa){
        return(ResponseEntity.status(HttpStatus.OK).body(comandaService.consultarComandaDaMesa(idMesa)));
    }

    @PostMapping("/{idMesa}")
    public ResponseEntity<Comanda> salvarComanda(@PathVariable long idMesa,@RequestBody Comanda comanda){
        return(ResponseEntity.status(HttpStatus.CREATED).body(comandaService.salvarComanda(idMesa,comanda)));
    }

    @GetMapping("/Finalizar/{idComanda}")
    public ResponseEntity<Comanda> finalizarComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.CREATED).body(comandaService.finalizarComanda(idComanda)));
    }
}
