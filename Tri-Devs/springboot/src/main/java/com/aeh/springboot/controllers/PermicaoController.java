package com.aeh.springboot.controllers;

import com.aeh.springboot.models.Permicao;
import com.aeh.springboot.services.PermicaoService;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Permicao")
public class PermicaoController {

    @Autowired
    PermicaoService permicaoService;

    @GetMapping({"","/"})
    public List<Permicao> consultarPermicoesCadastradas(){
        return(permicaoService.lerPermicoes());
    }

}
