package org.example.gotalearn.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.service.annotation.GetExchange;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Instructor extends User{
    private BigDecimal netWorth;
    private String education;
    @ElementCollection
    private List<String> experties=
            new ArrayList<>();
    @OneToMany(mappedBy = "instructor", cascade = CascadeType.ALL,
            orphanRemoval = true,fetch = FetchType.EAGER)
    private List<Course> courses=
            new ArrayList<>();

    public void addCourse(Course course){
        course.setInstructor(this);
        courses.add(course);
    }

    public void addExperties(String name){
        this.experties.add(name);
    }
}
