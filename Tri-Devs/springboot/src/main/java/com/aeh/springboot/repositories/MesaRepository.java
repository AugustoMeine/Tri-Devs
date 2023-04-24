package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesaRepository extends JpaRepository<Mesa,Long> {
    Mesa findById(long id);

    List<Mesa> findAll();
    boolean existsById(long idMesa);

    @Query("SELECT COUNT(p) FROM Pedido p INNER JOIN Comanda c ON p.comanda = c WHERE c.comandaAberta = true AND c.mesa.idMesa = :idMesa")
    long lerPedidosVinculados(@Param("idMesa") long idMesa);

}
