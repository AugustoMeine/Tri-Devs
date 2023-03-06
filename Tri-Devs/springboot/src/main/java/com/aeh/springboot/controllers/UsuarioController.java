package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
