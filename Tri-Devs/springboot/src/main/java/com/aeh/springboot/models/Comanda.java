package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "comanda")
@Data
@AllArgsConstructor
public class Comanda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idComanda;

//    @ManyToOne
//    @Column(nullable = false)
//    private List<Pedido> listaPedido;

    @Column(nullable = false)
    private float precoTotal;

    @ManyToOne
    @JoinColumn(nullable = false, name = "idMesa")
    private Mesa mesa;

    @Column(nullable = false)
    private boolean comandaAberta;


}
