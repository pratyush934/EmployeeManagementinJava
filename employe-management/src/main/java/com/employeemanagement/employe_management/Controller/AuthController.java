package com.employeemanagement.employe_management.Controller;

import com.employeemanagement.employe_management.Entity.User;
import com.employeemanagement.employe_management.Entity.Utility.AuthResponse;
import com.employeemanagement.employe_management.Entity.Utility.LoginRequest;
import com.employeemanagement.employe_management.Service.Implementation.UserServiceImpl;
import com.employeemanagement.employe_management.security.JWTService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    private AuthenticationManager authenticationManager;
    private UserServiceImpl userService;
    private JWTService jwtService;
    private LoginRequest loginRequest;

    public AuthController(AuthenticationManager authenticationManager, UserServiceImpl userService, JWTService jwtService, LoginRequest loginRequest) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
        this.loginRequest = loginRequest;

    }

    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("Ok sab Ok Ok  hai");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = userService.loadUserByUsername(loginRequest.getUsername());
            String jwts = jwtService.generateToken(userDetails);
            return ResponseEntity.ok(jwts);
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("So sorry but email or password is not valid");
        }
    }


}

