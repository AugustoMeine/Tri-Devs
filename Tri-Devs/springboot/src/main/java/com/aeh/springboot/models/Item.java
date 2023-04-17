package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Table(name = "item")
@Data
@AllArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idItem;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private Float precoUnidade;

    @Column(nullable = false)
    private boolean necessitaPreparoCozinha;

}
