package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Table(name = "PERMICAO")
public class Permicao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPermicao;

    @ManyToOne
    @JoinColumn(nullable = false,name = "idUsuario",unique = true)
    private Usuario usuario;

    @Column(nullable = false)
    private boolean caixa;

    @Column(nullable = false)
    private boolean cozinha;

    @Column(nullable = false)
    private boolean pedidos;

    @Column(nullable = false)
    private boolean administracaoUsuarios;
}
