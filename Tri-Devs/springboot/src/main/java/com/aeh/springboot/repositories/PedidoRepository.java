package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido,Long> {
    Pedido findById(long id);
    List<Pedido> findAll();

    @Query("SELECT p FROM Pedido p WHERE p.comanda.idComanda = :idComanda")
    List<Pedido> localizarPedidosPeloIdComanda(@Param("idComanda") long idComanda);

    @Query("SELECT p FROM Pedido p WHERE p.comanda.mesa.idMesa = :idMesa AND p.comanda.comandaAberta = true")
    List<Pedido> lerPedidosDaMesa(@Param("idMesa") long idMesa);

    @Query("SELECT p FROM Pedido p WHERE p.comanda.mesa.idMesa = :idMesa AND p.comanda.comandaAberta = true AND p.status='Finalizado'")
    List<Pedido> lerPedidosFinalizadosDaMesa(@Param("idMesa") long idMesa);

    @Query("SELECT p FROM Pedido p INNER JOIN Comanda c ON p.comanda = c WHERE c.comandaAberta = true AND p.status = 'Pendente preparo' ORDER BY p.idPedido")
    List<Pedido> lerPedidosPendentePreparo();

    boolean existsById(long idPedido);


}
