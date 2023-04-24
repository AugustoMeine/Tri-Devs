package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Comanda;
import com.aeh.springboot.models.Mesa;
import com.aeh.springboot.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComandaRepository extends JpaRepository<Comanda,Long> {
    Comanda findById(long id);

    @Query("SELECT c FROM Comanda c WHERE c.mesa.idMesa = :idMesa AND c.comandaAberta = true")
    Comanda consultarComandaDaMesa(@Param("idMesa") long idMesa);

    List<Comanda> findAll();

    @Query("SELECT c FROM Comanda c WHERE c.comandaAberta = true")
    List<Comanda> lerComandasAbertas();

    @Query("SELECT c FROM Comanda c INNER JOIN Pedido p ON c = p.comanda WHERE c.comandaAberta = true AND p.status = 'Pendente preparo'")
    List<Comanda> lerComandasAbertasComPedidosPendentePreparo();

    @Query("SELECT c FROM Comanda c WHERE c.mesa.idMesa = :vMesa AND c.comandaAberta = true")
    List<Comanda> localizarComandasPorMesa(@Param("vMesa") long vMesa);

    boolean existsById(long idComanda);
}
