package com.employeemanagement.employe_management.Service;

import com.employeemanagement.employe_management.Entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    UserDetails loadUserByUsername(String username);

    void saveUser(User user);
}
