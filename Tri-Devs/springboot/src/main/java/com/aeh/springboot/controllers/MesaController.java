package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.services.MesaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Mesa")
@CrossOrigin(origins = {"http://localhost:4200","*"})
@RequiredArgsConstructor
public class MesaController {

    private final MesaService mesaService;

    @GetMapping("/")
    public ResponseEntity<List<Mesa>> lerMesas(){
        return(ResponseEntity.status(HttpStatus.OK).body(mesaService.lerMesas()));
    }

    @GetMapping("/{idMesa}")
    public ResponseEntity<Mesa> lerMesa(@PathVariable long idMesa){
        return(ResponseEntity.status(HttpStatus.OK).body(mesaService.lerMesa(idMesa)));
    }

    @PostMapping("/")
    public ResponseEntity<Mesa> salvarMesa(@RequestBody Mesa mesa){
        return(ResponseEntity.status(HttpStatus.CREATED).body(mesaService.salvarMesa(mesa)));
    }

    @PutMapping("/")
    public ResponseEntity<Mesa> AtualizarMesa(@RequestBody Mesa mesa){
        return(ResponseEntity.status(HttpStatus.GONE).body(mesaService.alterarMesa(mesa)));
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deletarMesa(@RequestBody Mesa mesa){

        if(mesaService.deletarMesa(mesa)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Mesa deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Mesa não deletado!"));
        }
    }
}
