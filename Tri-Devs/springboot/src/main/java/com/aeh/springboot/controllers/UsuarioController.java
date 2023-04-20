package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.services.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/Usuario")
@CrossOrigin(origins = {"http://localhost:4200","*"})
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @GetMapping("/")
    public ResponseEntity<List<Usuario>> lerUsuarios(){
        return(ResponseEntity.status(HttpStatus.OK).body(usuarioService.lerUsuarios()));
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> lerUsuario(@PathVariable long idUsuario){
        return(ResponseEntity.status(HttpStatus.OK).body(usuarioService.lerUsuario(idUsuario)));
    }

    @GetMapping("/Login/{login}/{senha}")
    public ResponseEntity<Usuario> validarLogin(@PathVariable String login, @PathVariable String senha){

        //Descriptografia pendete

        return(ResponseEntity.status(HttpStatus.OK).body(usuarioService.validarLogin(login,senha)));
    }

    @PostMapping("")
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario){
        usuario.setDataCriacao(LocalDateTime.now());
        usuario.setDataDesligamento(null);

        return(ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.salvarUsuario(usuario)));
    }

    @PutMapping("")
    public ResponseEntity<Usuario> atualizarUsuario(@RequestBody Usuario usuario){
        return(ResponseEntity.status(HttpStatus.GONE).body(usuarioService.alterarUsuario(usuario)));
    }

    @DeleteMapping("")
    public ResponseEntity<String> deletarUsuario(@RequestBody Usuario usuario){

        if(usuarioService.deletarUsuario(usuario)){
            return(ResponseEntity.status(HttpStatus.GONE).body("Usuario deletado com sucesso!"));
        }
        else{
            return(ResponseEntity.status(HttpStatus.CONFLICT).body("Usuario não deletado!"));
        }
    }

}
