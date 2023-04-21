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
    //@DateTimeFormat(pattern = "HH:mm:ss")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss", locale = "pt-BR")
    private LocalTime horaResgistro;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR")
    private LocalDate dataResgistro;

    @Column(nullable = false)
    private String status;
}
