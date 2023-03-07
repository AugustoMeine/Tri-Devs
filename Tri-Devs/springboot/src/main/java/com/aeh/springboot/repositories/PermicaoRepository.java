package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Permicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermicaoRepository extends JpaRepository<Permicao, Long> {

}
