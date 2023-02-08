package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findById(long id);
    List<Usuario> findAll();
}