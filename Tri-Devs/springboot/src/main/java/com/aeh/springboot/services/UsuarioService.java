package com.aeh.springboot.services;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario lerUsuario(long idUsuario){
        return(usuarioRepository.findById(idUsuario));
    }

    public List<Usuario> lerUsuarios(){
        return(usuarioRepository.findAll());
    }

    public Usuario validarLogin(String login, String senha){
        return(usuarioRepository.findByLoginAndSenha(login, senha));
    };

    public Usuario salvarUsuario(Usuario usuario){
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
