package com.employeemanagement.employe_management.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {


    @GetMapping("/")
    public String goodBoy() {
        return "Hello Kids";
    }
}
