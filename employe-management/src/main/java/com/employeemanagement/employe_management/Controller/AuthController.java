package com.employeemanagement.employe_management.Controller;

import com.employeemanagement.employe_management.Service.Implementation.UserServiceImpl;
import com.employeemanagement.employe_management.security.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserServiceImpl userService;
    private JWTService jwtService;

    public AuthController(AuthenticationManager authenticationManager, UserServiceImpl userService, JWTService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
    }



}
