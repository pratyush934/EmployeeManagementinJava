package com.employeemanagement.employe_management.Entity.Utility;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
public class AuthResponse {

    private String token;

    public AuthResponse(String token) {
        this.token = token;
    }
}
