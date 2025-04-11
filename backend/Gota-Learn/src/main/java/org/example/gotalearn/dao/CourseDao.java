package org.example.gotalearn.dao;

import org.example.gotalearn.ds.CourseInfoDto;
import org.example.gotalearn.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseDao extends JpaRepository<Course,Long> {
//public CourseInfoDto(String courseId, String title, String description, String fees, String category, byte[] imageBase64, String instructorName) {

    @Query("""
select new org.example.gotalearn.ds.CourseInfoDto(cou.id,cou.title,cou.description,cou.fees,cat.categoryName,cou.image,ins.username)
from Category cat join cat.courses cou join cou.instructor ins
""")
    List<CourseInfoDto> findAllCourses();
}
