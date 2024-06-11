package com.employeemanagement.employe_management.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Data
@Entity
@Table(name = "user_table")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer userId;

    @NotNull
    @Size(min = 2, max = 15)
    private String firstName;

    @NotNull
    @Size(min = 2, max = 15)
    private String lastName;

    @NotNull
    @Email
    @Column(unique = true)
    private String email;

    @NotNull
    @Size(min = 4, max = 20)
    private String password;

    @NotNull
    @Size(min = 20, max = 100)
    private String description;


    private Integer blogCount;

    @OneToMany(mappedBy = "user")
    private List<Todo> todos;





}
