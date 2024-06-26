package com.employeemanagement.employe_management.Service.Implementation;

import com.employeemanagement.employe_management.Entity.User;
import com.employeemanagement.employe_management.Repository.UserRepository;
import com.employeemanagement.employe_management.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //    @Autowired
//    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("So sad but it is true"));
    }

    @Override
    public void saveUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
