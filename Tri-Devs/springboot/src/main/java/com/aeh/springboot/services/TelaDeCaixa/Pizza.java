package com.aeh.springboot.services.TelaDeCaixa;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode

@Entity(name = "TB_PIZZA")
public class Pizza implements Serializable {
    private static final long serialVersionUID = 1L;

    //A geração da chave primária vai ser responsabilidade do banco.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private boolean ativo;
    private int quantidadeProdutoExistente;

    @Enumerated(EnumType.STRING)
    private Sabor sabor;

    public Pizza(String nome, boolean ativo, int quantidadeProdutoExistente, Sabor sabor) {
        super();
        this.nome = nome;
        this.ativo = ativo;
        this.quantidadeProdutoExistente = quantidadeProdutoExistente;
        this.sabor = sabor;
    }


}
