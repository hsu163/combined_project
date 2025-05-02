import axios from "axios";
import { getToken } from "./auth.service";
import { LessonDto } from "../ds/lesson.dto";
import { enrolledDto } from "../ds/enrolled.dto";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  const COURSE_BACKEND_URL = 'http://localhost:8080/api/courses';

  export const getAllCategories = () => axios.get(COURSE_BACKEND_URL + '/categories');

  export const createCoursesApiCall = (courses:FormData) => axios.post(COURSE_BACKEND_URL + '/create', courses);

  export const createCourseLessonsApiCall = (lessons: LessonDto) => axios.post(`${COURSE_BACKEND_URL}/lessons`, lessons);

  export const getAllCoursesInfo = () => axios.get(`${COURSE_BACKEND_URL}/all`);

  export const getAllCoursesInfoByInstructorName = (name:string) => axios.get(`${COURSE_BACKEND_URL}/instructor/${name}`);

  export const detectAlreadyEnrolled = (enrolledDto:enrolledDto) => axios.post(`${COURSE_BACKEND_URL}/detect/already-enrolled`, enrolledDto);

  export const enrollCourseApiCall = (enrolledDto:enrolledDto) => axios.post(`${COURSE_BACKEND_URL}/enroll-course`, enrolledDto);

  export const getAllEnrolledCoursesByStudentName = (name:string) =>
    axios.get(`${COURSE_BACKEND_URL}/enrolled/${name}`);

  export const getAllCourseLessonsByCourseId = (id:number) =>
    axios.get(`${COURSE_BACKEND_URL}/course-lessons/${id}`)
