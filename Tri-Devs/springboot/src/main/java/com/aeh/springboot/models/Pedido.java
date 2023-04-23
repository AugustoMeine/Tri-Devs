package com.aeh.springboot.models;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    @ManyToOne
    @JoinColumn(nullable = false)
    private Item item;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Comanda comanda;

    @Column(nullable = false)
    private int quantidadeItem;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss", locale = "pt-BR")
    private LocalTime horaResgistro;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR")
    private LocalDate dataResgistro;

    @Column(nullable = false)
    private String status;
    /*
    Pedido - status:

    1)Pendente preparo - quando é registrado e precisa ser preparado na cozinha
    2)Pendente entrega - quando é registrado e precisa ser entrege ao cliente
    3)Finalizado - quando é entrege ao cliente, onde ele consumindo, ou não, ele vai pagar.
    4)Cancelado - quando não será entregue/preparado um pedido previamente registrado. (Não será cobrado no caixa)
     */
}
