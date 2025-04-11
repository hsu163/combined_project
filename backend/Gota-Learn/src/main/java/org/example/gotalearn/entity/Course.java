package org.example.gotalearn.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private BigDecimal fees;
    private String description;
    @Lob
    private byte[] image;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Instructor instructor;

}
