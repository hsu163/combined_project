package org.example.gotalearn.controller;

import lombok.RequiredArgsConstructor;
import org.example.gotalearn.ds.CourseInfoDto;
import org.example.gotalearn.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/courses")
public class CourseController {
    private final CourseService courseService;
    @GetMapping("/all")
    public List<CourseInfoDto> findAllCourses(){
        return courseService.findAllCoursesInfo();
    }

    record CategoryDto(long id,String categoryName){}
    @GetMapping("/categories")
    public List<CategoryDto> findAllCategories(){
        return courseService
                .findAllCategories()
                .stream()
                .map(c->new CategoryDto(c.getId(),
                        c.getCategoryName()))
                .toList();
    }

    @PostMapping("/create")
    public ResponseEntity<String> createCourse(
            @RequestParam("title")String title,
            @RequestParam("description")String description,
            @RequestParam("fees") double fees,
            @RequestParam("category_name")String categoryName,
            @RequestParam("username")String username,
            @RequestParam(value = "image",required = false) MultipartFile image
    )throws IOException {
        String responseString = courseService
                .crateCourse(
                        title,
                        description,
                        BigDecimal.valueOf(fees),
                        image,
                        categoryName,
                        username);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(responseString);
    }
}
