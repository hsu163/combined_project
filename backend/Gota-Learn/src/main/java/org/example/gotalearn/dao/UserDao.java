package org.example.gotalearn.dao;

import org.example.gotalearn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
