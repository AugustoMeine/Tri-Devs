package com.aeh.springboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping({"", "/"})
    public String mensagemInicial(){
        return("<A Rest API está funcionando>");
    }
}
