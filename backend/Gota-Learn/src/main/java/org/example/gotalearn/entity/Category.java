package org.example.gotalearn.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String categoryName;

    public Category(String categoryName) {
        this.categoryName = categoryName;
    }

    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER)
    private List<Course> courses=
            new ArrayList<>();

    public void addCourse(Course course){
        course.setCategory(this);
        courses.add(course);
    }
}
