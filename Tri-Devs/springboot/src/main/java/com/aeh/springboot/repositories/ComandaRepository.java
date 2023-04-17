package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Comanda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComandaRepository extends JpaRepository<Comanda,Long> {
    Comanda findById(long id);
    List<Comanda> findAll();
}
