import { useEffect, useState } from "react";
import { CourseDto } from "../ds/course.dto";
import { getLoggedInUserName } from "../service/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { getAllEnrolledCoursesByStudentName } from "../service/course.service";

export default function MyLearningComponent() {
  const [enrolledCourses, setEnrolledCourses] = useState<CourseDto[]>([]);
  const username = getLoggedInUserName();
  const navigator = useNavigate();

  useEffect(() => {
    getAllEnrolledCoursesByStudentName(username as string)
      .then((res) => setEnrolledCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toCourseLessons = (id:number) =>{
     navigator(`/course-lessons/${id}`);
  }

  return (
    <div className="container mt-4">
      <h2>My Enrolled Courses</h2>
      <div className="row">
        {enrolledCourses &&
          enrolledCourses.length > 0 &&
          enrolledCourses.map((course) => (
            <div className="col-md-4 mb-4" key={course.courseId}>
              <div className="card h-100">
                <img
                  src={`data:image/jpeg;base64,${course.imageBase64}`}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center text-capitalize">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text"><strong>Instructor:</strong> {course.instructorName}</p>
                    <p className="card-text"><strong>Fees:</strong> ${course.fees}</p>
                  </div>
                  <button onClick={() => toCourseLessons(course.courseId)}
                  className="btn btn-primary mt-auto">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}