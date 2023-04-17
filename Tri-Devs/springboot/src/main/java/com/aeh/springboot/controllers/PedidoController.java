package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/Pedido")
@CrossOrigin(origins = "*")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @GetMapping({"/",""})
    public ResponseEntity<List<Pedido>> lerPedidos(){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidos()));
    }

    @GetMapping("/{idPedido}")
    public ResponseEntity<Pedido> lerPedido(@PathVariable long idPedido){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedido(idPedido)));
    }

    @PostMapping({"/",""})
    public ResponseEntity<Pedido> salvarPedido(@RequestBody Pedido pedido){

        pedido.setHoraResgistro(LocalTime.now());
        pedido.setDataResgistro(LocalDate.now());

        return(ResponseEntity.status(HttpStatus.CREATED).body(pedidoService.salvarPedido(pedido)));
    }

    @DeleteMapping({"/",""})
    public ResponseEntity<String> deletarPedido(@RequestBody Pedido pedido){

        if(pedidoService.deletarPedido(pedido)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Pedido deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Pedido não deletado!"));
        }
    }
}
