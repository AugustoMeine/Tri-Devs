package com.aeh.springboot.dtos;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;

public class UsuarioDTO {

    @NotBlank
    private String login;
    @NotBlank
    private String senha;
    @NotBlank
    private String nome;
}
