import { useEffect, useState } from "react";
import { CourseDto } from "../ds/course.dto";
import { createCourseLessonsApiCall, getAllCoursesInfoByInstructorName } from "../service/course.service";
import { getLoggedInUserName } from "../service/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { LessonDto } from "../ds/lesson.dto";

export default function CreateCourseLessonsComponent() {
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [courseId, setCourseId] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseDto | null>(null);
  const instructorName = getLoggedInUserName();
  const [lessonName, setlessonName] = useState('');
  const [lessonLink, setLessonLink] = useState('');

  useEffect(() => {
    getAllCoursesInfoByInstructorName(instructorName as string)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleShowModal = (course: CourseDto) => {
    setCourseId(course.courseId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleAddLesson = (e) => {
    e.preventDefault();

    const lesson:LessonDto = {
        courseId,
        lessonName,
        lessonLink
    }

    createCourseLessonsApiCall(lesson)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

    handleCloseModal();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4>
                Courses By
                <span className="ms-2 text-capitalize">{instructorName}</span>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped border table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses &&
                    courses.length > 0 &&
                    courses.map((c) => (
                      <tr key={c.courseId}>
                        <td>{c.courseId}</td>
                        <td>{c.title}</td>
                        <td>${c.fees}</td>
                        <td>
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => handleShowModal(c)}
                          >
                            Add Lessons
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Lesson to {selectedCourse?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddLesson}>
            <div className="mb-3">
              <label htmlFor="lessonName" className="form-label">
                Lesson Name:
              </label>
              <input
                value={lessonName}
                type="text"
                className="form-control"
                id="lessonName"
                name="lessonName"
                onChange={e => setlessonName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lessonLink" className="form-label">
                Lesson Link:
              </label>
              <textarea
                value={lessonLink}
                id="lessonLink"
                className="form-control"
                name="lessonLink"
                onChange={e => setLessonLink(e.target.value)}
                required
              />
            </div>
            <Button className="w-100" variant="primary" type="submit">
              Add Lesson
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}