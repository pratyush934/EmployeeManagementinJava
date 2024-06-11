package com.employeemanagement.employe_management.Entity;

import jakarta.persistence.*;
import lombok.*;

import javax.naming.Name;
import java.time.LocalDate;


@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Data
@Entity
@Table(name = "token")
public class Token {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tokenId;

    @Column(unique = true)
    private String token;
    private LocalDate createdAt;
    private LocalDate expiredAt;
    private LocalDate validatedAt;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;
}
