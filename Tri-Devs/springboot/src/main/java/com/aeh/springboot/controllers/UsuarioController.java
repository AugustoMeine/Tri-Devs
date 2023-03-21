package com.aeh.springboot.controllers;

import com.aeh.springboot.dtos.UsuarioDTO;
import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping({"/",""})
    public ResponseEntity<List<Usuario>> lerUsuraios(){
        return(ResponseEntity.status(HttpStatus.OK).body(usuarioService.lerUsuarios()));
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> lerUsuraio(@PathVariable long idUsuario){
        return(ResponseEntity.status(HttpStatus.OK).body(usuarioService.lerUsuario(idUsuario)));
    }

    @PostMapping("/")
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody @Valid UsuarioDTO usuarioDTO){

        Usuario usuario = new Usuario();

        //Obtem a data atual e transforma a em string no padrão dd/MM/rrrr
        LocalDate dataAtual = LocalDate.now();
        DateTimeFormatter formatoPadrao = DateTimeFormatter.ofPattern("dd/MM/yyyy"); //Padrão desejado
        String dataFormatada = dataAtual.format(formatoPadrao);

        //Pega a data atual, no formato String, e converte para o fortato Date
        SimpleDateFormat formatadorTipo = new SimpleDateFormat("dd/MM/yyyy");
        Date data = new Date();
        try {
            data =  formatadorTipo.parse(dataFormatada);
        } catch (ParseException erroParseException) {
            throw new RuntimeException(erroParseException);
        }

        BeanUtils.copyProperties(usuarioDTO,usuario);

        usuario.setDataCriacao(data);
        usuario.setDataDesligamento(null);
        return(ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.salvarUsuario(usuario)));
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deletarUsuario(@RequestBody @Valid UsuarioDTO usuarioDTO){

        Usuario usuario = new Usuario();

        if(usuarioService.deletarUsuario(usuario)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Usuario deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Usuario não deletado!"));
        }
    }
}
