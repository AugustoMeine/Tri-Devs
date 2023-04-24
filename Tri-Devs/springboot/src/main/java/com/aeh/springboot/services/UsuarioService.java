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

    public Usuario salvarUsuario(long idStatus,Usuario usuario){
        //Valida se já existe alguem com o usuário notificado
        if(usuarioRepository.existsByLogin(usuario.getLogin())){
          return(null);
        }

        usuario.setIdUsuario(-1L);
        usuario.setDataCriacao(LocalDateTime.parse(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")),DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")));
        usuario.setDataDesligamento(LocalDateTime.of(3000,12,31,23,59,59));

        //Defini qual status foi solicitado através do pedido da tela
        if(idStatus == 1){
            usuario.setAcesso("ADM");
        }
        else if(idStatus == 2){
            usuario.setAcesso("GARCOM");
        }
        else if(idStatus == 3){
            usuario.setAcesso("CAIXA");
        }
        else if(idStatus == 4){
            usuario.setAcesso("COZINHEIRO");
        }
        else{
            return(null);
        }

        return(usuarioRepository.save(usuario));
    }

    public Usuario alterarUsuario(Usuario usuario){
        if(!usuarioRepository.existsById(usuario.getIdUsuario())){
            return(null);
        }

        Usuario usuarioFinal = usuarioRepository.findById(usuario.getIdUsuario());

        //Não popula o acesso notificado, pois o acesso não é possível realizar a alteração
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

    public Usuario desligarUsuario(long idUsuario){
        //valida se o usuário existe
        if(!usuarioRepository.existsById(idUsuario)){
            return(null);
        }

        Usuario usuarioFinal = usuarioRepository.findById(idUsuario);

        //Valida se o usuário já foi desligado
        if(!usuarioFinal.getDataDesligamento().equals(LocalDateTime.of(3000,12,31,23,59,59))){
            return(null);
        }

        //Não popula o acesso notificado, pois o acesso não é possível realizar a alteração
        usuarioFinal.setDataDesligamento(LocalDateTime.parse(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")),DateTimeFormatter.ofPattern("dd/MM/uuuu HH:mm:ss")));

        return(usuarioRepository.save(usuarioFinal));
    }

}
