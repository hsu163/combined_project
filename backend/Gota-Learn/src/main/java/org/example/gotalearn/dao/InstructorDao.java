package org.example.gotalearn.dao;

import org.example.gotalearn.entity.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InstructorDao extends JpaRepository<Instructor,Long> {
    Optional<Instructor> findByUsername(String username);
}
