package com.aeh.springboot.services;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.repositories.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public Usuario lerUsuario(long idUsuario){
        return(usuarioRepository.findById(idUsuario));
    }

    public List<Usuario> lerUsuarios(){
        return(usuarioRepository.findAll());
    }

    public Usuario validarLogin(String login, String senha){
        return(usuarioRepository.validarAcessoUsuario(login, senha));
    };

    public Usuario salvarUsuario(Usuario usuario){

        usuario.setIdUsuario(-1L);
        usuario.setDataCriacao(LocalDateTime.parse(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")),DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")));
        usuario.setDataDesligamento(LocalDateTime.of(3000,12,31,23,59,59));

        return(usuarioRepository.save(usuario));
    }

    public Usuario alterarUsuario(Usuario usuario){
        if(usuario.getIdUsuario() >= 0){
            return(usuarioRepository.save(usuario));
        }
        else{
            return(null);
        }
    }

    public boolean deletarUsuario(Usuario usuario){
        if(usuario.getIdUsuario() >= 0){
            usuarioRepository.delete(usuario);
            return(true);
        }
        else{
            return(false);
        }
    }

}
