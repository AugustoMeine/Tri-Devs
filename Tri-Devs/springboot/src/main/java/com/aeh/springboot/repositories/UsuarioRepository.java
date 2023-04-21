package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findById(long id);
    List<Usuario> findAll();

    @Query("SELECT u FROM Usuario u WHERE u.login = :vLogin AND u.senha = :vSenha")
    Usuario validarAcessoUsuario(@Param("vLogin") String vLogin,@Param("vSenha") String vSenha);

    boolean existsById(long idUsuario);
}
