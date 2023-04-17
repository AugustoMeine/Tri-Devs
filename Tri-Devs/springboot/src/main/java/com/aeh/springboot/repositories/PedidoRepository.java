package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido,Long> {
    Pedido findById(long id);
    List<Pedido> findAll();
}
