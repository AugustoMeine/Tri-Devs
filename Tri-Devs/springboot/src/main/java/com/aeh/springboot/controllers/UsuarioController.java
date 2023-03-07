package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Usuario> lerUsuraios(){
        return(usuarioService.lerUsuarios());
    }

    @GetMapping("/{idUsuario}")
    public Usuario lerUsuraio(@PathVariable long idUsuario){
        return(usuarioService.lerUsuario(idUsuario));
    }

    @PostMapping("/")
    public Usuario salvarUsuario(@RequestBody Usuario usuario){
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

        usuario.setDataCriacao(data);
        usuario.setDataDesligamento(null);
        return(usuarioService.salvarUsuario(usuario));
    }

    @DeleteMapping("/")
    public String deletarUsuario(@RequestBody Usuario usuario){
        if(usuarioService.deletarUsuario(usuario)){
            return("Usuario " + usuario.getNome() + " foi deletado com sucesso");
        }
        else{
            return("Usuario " + usuario.getNome() + " não foi deletado");
        }
    }
}
