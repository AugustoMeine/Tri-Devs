package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name = "pedido")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPedido;

//    @ManyToOne
//    @JoinColumn(name = "idItem")
//    private Item item;
    @Column(nullable = false)
    private long idItem;

//    @ManyToOne
//    @JoinColumn(name = "idComanda")
//    private Comanda comanda;
    @Column(nullable = false)
    private long idComanda;

    @Column(nullable = false)
    private int quantidadeItem;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime horaResgistro;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataResgistro;

    @Column(nullable = false)
    private String status;
}
