package com.aeh.springboot.services;

import com.aeh.springboot.models.Usuario;
import com.aeh.springboot.repositories.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final Logger log = LoggerFactory.getLogger(UsuarioService.class);

    public Usuario lerUsuario(long idUsuario){
        return(usuarioRepository.findById(idUsuario));
    }

    public List<Usuario> lerUsuarios(){
        return(usuarioRepository.findAll());
    }

    public Usuario validarLogin(String login, String senha){
        return(usuarioRepository.validarAcessoUsuario(login,senha));
    };

    public Usuario salvarUsuario(Usuario usuario){
        //Valida se já existe alguem com o usuário notificado
        if(usuarioRepository.existsByLogin(usuario.getLogin())){
          return(null);
        }

        usuario.setIdUsuario(-1L);
        usuario.setDataCriacao(LocalDateTime.parse(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")),DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")));
        usuario.setDataDesligamento(LocalDateTime.of(3000,12,31,23,59,59));

        return(usuarioRepository.save(usuario));
    }

    public Usuario alterarUsuario(Usuario usuario){
        if(!usuarioRepository.existsById(usuario.getIdUsuario())){
            log.info("Possui usuario existente!" + usuario.getLogin());
            return(null);
        }

        Usuario usuarioFinal = usuarioRepository.findById(usuario.getIdUsuario());

        usuarioFinal.setLogin(usuario.getLogin());
        usuarioFinal.setSenha(usuario.getSenha());
        usuarioFinal.setNome(usuario.getNome());

        //Valida se o login novo já existe
        if(usuarioRepository.existsByLogin(usuarioFinal.getLogin())){
            return(null);
        }

        return(usuarioRepository.save(usuarioFinal));
    }

    public boolean deletarUsuario(long idUsuario){
        //valida se o usuário existe
        if(usuarioRepository.existsById(idUsuario)){
            usuarioRepository.deleteById(idUsuario);
            return(!usuarioRepository.existsById(idUsuario));
        }
        return(false);
    }

}
