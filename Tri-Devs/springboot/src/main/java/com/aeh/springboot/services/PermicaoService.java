package com.aeh.springboot.services;

import com.aeh.springboot.models.Permicao;
import com.aeh.springboot.repositories.PermicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermicaoService {

    @Autowired
    PermicaoRepository permicaoRepository;

    public List<Permicao> lerPermicoes(){
        return(permicaoRepository.findAll());
    }

}
