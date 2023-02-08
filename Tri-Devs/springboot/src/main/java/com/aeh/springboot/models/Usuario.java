package com.aeh.springboot.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "USUARIO")
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long idUsuario;

    @Column(nullable = false,length = 50)
    String login;

    @Column(nullable = false,length = 50)
    String senha;

    @Column(nullable = false,length = 150)
    String nome;

}
