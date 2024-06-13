package com.employeemanagement.employe_management.security;

import com.employeemanagement.employe_management.Entity.User;
import com.employeemanagement.employe_management.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

public class UserDetailServiceImp implements UserDetailsService {
    private final UserRepository userRepository;

    public UserDetailServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("So sorry"));
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
}
