package org.example.gotalearn.service;

import lombok.RequiredArgsConstructor;
import org.example.gotalearn.dao.CategoryDao;
import org.example.gotalearn.dao.CourseDao;
import org.example.gotalearn.dao.InstructorDao;
import org.example.gotalearn.ds.CourseInfoDto;
import org.example.gotalearn.entity.Category;
import org.example.gotalearn.entity.Course;
import org.example.gotalearn.entity.Instructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseDao courseDao;
    private final CategoryDao categoryDao;
    private final InstructorDao instructorDao;

    public List<CourseInfoDto> findAllCoursesInfo(){
        return courseDao.findAllCourses();
    }

    public List<Category> findAllCategories(){
        return categoryDao.findAll();
    }

    @Transactional
    public String crateCourse(String title,
                              String description,
                              BigDecimal fees,
                              MultipartFile image,
                              String categoryName,
                              String username)throws IOException {
        Category category=categoryDao
                .findByCategoryName(categoryName).orElseThrow();
        Instructor instructor=instructorDao
                .findByUsername(username).orElseThrow();
        Course course=new Course();
        course.setFees(fees);
        course.setTitle(title);
        course.setDescription(description);
        if(image!=null){
            course.setImage(image.getBytes());
        }

        instructor.addCourse(course);
        category.addCourse(course);
        courseDao.save(course);
        return "Course Created Successfully";
    }
}
