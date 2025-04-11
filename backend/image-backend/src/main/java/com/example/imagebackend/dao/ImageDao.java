package com.example.imagebackend.dao;

import com.example.imagebackend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageDao extends JpaRepository<Image,Long> {
}
