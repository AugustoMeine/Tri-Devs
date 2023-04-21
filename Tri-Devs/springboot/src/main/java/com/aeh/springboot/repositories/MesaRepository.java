package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesaRepository extends JpaRepository<Mesa,Long> {
    Mesa findById(long id);
    List<Mesa> findAll();
    boolean existsById(long idMesa);
}
