package com.aeh.springboot.repositories;

import com.aeh.springboot.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item,Long> {
    Item findById(long id);
    List<Item> findAll();
}
