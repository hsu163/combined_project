package org.example.gotalearn.dao;

import org.example.gotalearn.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryDao extends JpaRepository<Category,Long> {

    Optional<Category> findByCategoryName(String categoryName);
}
