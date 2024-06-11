package com.employeemanagement.employe_management.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
@Data
@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "todoId")
    private Integer todoId;

    @NotNull
    @Size(min = 2, max = 200)
    private String todoDescription;

    @NotNull
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
}
