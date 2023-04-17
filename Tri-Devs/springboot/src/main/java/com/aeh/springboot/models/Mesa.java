package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Table(name = "mesa")
@Data
@AllArgsConstructor
public class Mesa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idMesa;

    @Column(nullable = false)
    private boolean estaOcupada;
}
