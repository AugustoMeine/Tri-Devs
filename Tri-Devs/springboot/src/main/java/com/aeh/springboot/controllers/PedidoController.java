package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Item;
import com.aeh.springboot.models.Pedido;
import com.aeh.springboot.repositories.ComandaRepository;
import com.aeh.springboot.repositories.ItemRepository;
import com.aeh.springboot.services.ComandaService;
import com.aeh.springboot.services.ItemService;
import com.aeh.springboot.services.PedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/Pedido")
@CrossOrigin(origins = {"http://localhost:4200","*"})
@RequiredArgsConstructor
public class PedidoController {

    private final PedidoService pedidoService;
    private final ItemRepository itemRepository;
    private final ItemService itemService;
    private final ComandaRepository comandaRepository;
    private final ComandaService comandaService;

    @GetMapping("/")
    public ResponseEntity<List<Pedido>> lerPedidos(){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidos()));
    }

    @GetMapping("/Comanda/{idComanda}")
    public ResponseEntity<List<Pedido>> lerPedidosDaComanda(@PathVariable long idComanda){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidosDaComanda(idComanda)));
    }

    @GetMapping("/Mesa/{idMesa}")
    public ResponseEntity<List<Pedido>> lerPedidosDaMesa(@PathVariable long idMesa){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidosDaMesa(idMesa)));
    }

    @GetMapping("/Mesa/Finalizado/{idMesa}")
    public ResponseEntity<List<Pedido>> lerPedidosFinalizadosDaMesa(@PathVariable long idMesa){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidosFinalizadosDaMesa(idMesa)));
    }


    @GetMapping("/PendentePreparo/")
    public ResponseEntity<List<Pedido>> lerPedidosPendentePreparo(){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedidosPendentePreparo()));
    }

    @GetMapping("/{idPedido}")
    public ResponseEntity<Pedido> lerPedido(@PathVariable long idPedido){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.lerPedido(idPedido)));
    }

    @PostMapping("/Mesa/{idMesa}")
    public ResponseEntity<Pedido> salvarPedidoComIdMesa(@PathVariable long idMesa,@RequestBody Pedido pedido){
        return(ResponseEntity.status(HttpStatus.OK).body(pedidoService.salvarPedidoComIdMesa(idMesa,pedido)));
    }

    @GetMapping("/{idComanda}/{idItem}/{quantidadeItem}")
    public ResponseEntity<Pedido> salvarPedido(@PathVariable long idComanda,@PathVariable long idItem,@PathVariable int quantidadeItem){
        return(ResponseEntity.status(HttpStatus.CREATED).body(pedidoService.salvarPedido(idComanda,idItem,quantidadeItem)));
    }

    @GetMapping("/AlterarStatus/{idPedido}/{idStatus}")
    public ResponseEntity<Pedido> alterarStatusPedido(@PathVariable long idPedido, @PathVariable long idStatus){
        return(ResponseEntity.status(HttpStatus.CREATED).body(pedidoService.alterarStatusPedido(idPedido,idStatus)));
    }


}
