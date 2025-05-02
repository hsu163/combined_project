import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllCourseLessonsByCourseId } from "../service/course.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { LessonDto } from "../ds/lesson.dto";

export default function CourseLessonsComponent() {
  const { id } = useParams();
  const [courseLessons, setCourseLessons] = useState<LessonDto[]>([]);

  useEffect(() => {
    getAllCourseLessonsByCourseId(parseInt(id as string))
      .then((res) => setCourseLessons(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(courseLessons);

  return (
    <div className="container mt-4">
      <h2>Course Lessons</h2>
      <div className="list-group">
        {courseLessons &&
          courseLessons.length > 0 &&
          courseLessons.map((lesson,index) => (
            <div className="list-group-item" key={index}>
              <h5 className="mb-1">{lesson.lesson}</h5>
              <p className="mb-1">{lesson.lesson}</p>
              <Link className="text-muted" to={lesson.lessonLink}>Lesson Link: {lesson.lesson}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}