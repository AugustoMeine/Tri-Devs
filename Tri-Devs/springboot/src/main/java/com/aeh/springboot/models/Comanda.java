package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "comanda")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comanda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idComanda;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Mesa mesa;

    @Column(nullable = false)
    private float precoTotalPedido;

    @Column(nullable = false)
    private boolean comandaAberta;

}
