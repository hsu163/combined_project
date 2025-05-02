import { useContext, useEffect, useState } from "react";
import { CourseDto } from "../ds/course.dto";
import { getAllCoursesInfo } from "../service/course.service";
import { CartContext } from "../App";

export default function HomeComponent() {
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [searchName, setSearchName] = useState("");
  const [searchResultCourse, setSearchResultCourse] = useState<CourseDto[]>([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    getAllCoursesInfo()
      .then((res) => {
        setCourses(res.data);
        setSearchResultCourse(res.data); // Initialize search result with all courses
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle search logic
  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchName.toLowerCase()) ||
        course.category.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResultCourse(filteredCourses);
  }, [searchName, courses]);

  return (
    <div className="container mt-4">
      <div className="row my-3">
            <div className="col-6 offset-6">
              <input type="text" className="form-control" onChange={e => setSearchName(e.target.value)}
              placeholder="search courses by title or category name" />
            </div>
      </div>

      {/* Display Courses */}
      <div className="row">
        {searchResultCourse.length > 0 ? (
          searchResultCourse.map((course) => (
            <div className="col-md-4 mb-4" key={course.courseId}>
              <div className="card">
                {course.imageBase64 ? (
                  <img
                    src={`data:image/jpeg;base64,${course.imageBase64}`} // Decoding base64 image
                    alt={course.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    No Image Available
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold">{course.title}</h5>
                  <p className="card-text text-muted">{course.description}</p>

                  <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded">
                    <p className="card-text mb-0">
                      <strong className="text-dark">Instructor:</strong> {course.instructorName}
                    </p>
                    <p className="card-text mb-0">
                      <strong className="text-dark">Fees:</strong>{" "}
                      <span className="text-success">{course.fees} USD</span>
                    </p>
                  </div>

                  <button onClick={() => addToCart(course)}
                  className="btn btn-primary mt-3 fw-semibold shadow-sm">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-danger">
            <h4>No courses found</h4>
          </div>
        )}
      </div>
    </div>
  );
}
