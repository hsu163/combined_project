import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import LoginComponent from "./components/LoginComponent";
import {
  getLoggedInUserName,
  isAdmin,
  isInstructor,
  isLoggedIn,
  
} from "./service/auth.service";
import DashboardComponent from "./components/DashboardComponent";
import CreateCourseComponent from "./components/CreateCourseComponent";
import CreateCourseLessonsComponent from "./components/CreateCourseLessonsComponent";
import { createContext, useState } from "react";
import { CourseDto } from "./ds/course.dto";
import { detectAlreadyEnrolled, enrollCourseApiCall } from "./service/course.service";
import { enrolledDto } from "./ds/enrolled.dto";
import MyLearningComponent from "./components/MyLearningComponent";
import CourseLessonsComponent from "./components/CourseLessonsComponent";
import RegisterComponentWithHookForm from "./components/RegisterComponentHookForm";
import CheckOutViewComponent from "./components/CheckOutViewComponent";

const cartItem: CourseDto[] = [];
export const CartContext = createContext({
  addToCart: (course: CourseDto) => {},
  cartItems: cartItem,
  checkOut: (couse: CourseDto) => {},
  remove:(courseId:number) => {},
  msg:''
});

export default function App() {
  const [cartItems, setCartItems] = useState<CourseDto[]>([]);
  const [msg,setMsg] = useState('');
  const beTeacher = isInstructor();
  const beAdmin = isAdmin();

  const student_name = getLoggedInUserName() as string;

  const addToCart = async (course: CourseDto) => {
    const enrolledDto: enrolledDto = {
      student_name,
      course_id: course.courseId,
    };
    const response = await detectAlreadyEnrolled(enrolledDto).catch((err) =>
      console.log(err)
    );
    const enrolled = response?.data as boolean;

    if (!duplicateCourse(course) && !enrolled) {
      setCartItems([...cartItems, course]);
    }
  };
  const remove =(courseId:number) =>{
    setCartItems(cartItems.filter((item) => item.courseId !== courseId));
  }
  const duplicateCourse = (course: CourseDto) =>
    cartItems.some((item) => item.courseId === course.courseId);

  const checkOut = (courseDto: CourseDto) => {
     remove(courseDto.courseId);
     const entrolledDto:enrolledDto={
       student_name,
       course_id:courseDto.courseId
     }
     enrollCourseApiCall(entrolledDto)
     .then(res => {
       setMsg(res.data);
     })
     .catch(err => console.log(err));
  };

  const cartContextValue = {
    addToCart,
    cartItems,
    checkOut,
    remove,
    msg
  };

  const TeacherAuthenticatedRoute = ({ children }) => {
    if (!isInstructor()) {
      return <HomeComponent />;
    }
    return children;
  };

  const AuthenticatedRoute = ({ children }) => {
    if (!isLoggedIn()) {
      return <LoginComponent />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value={cartContextValue}>
          <HeaderComponent />

          <Routes>
            <Route
              path="/"
              element={
                <AuthenticatedRoute>
                  <HomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <AuthenticatedRoute>
                  <CheckOutViewComponent />
                </AuthenticatedRoute>
              }
            />
             <Route
              path="/my-learning"
              element={
                <AuthenticatedRoute>
                  <MyLearningComponent />
                </AuthenticatedRoute>
              }
            />
             <Route
              path="/course-lessons/:id"
              element={
                <AuthenticatedRoute>
                  <CourseLessonsComponent />
                </AuthenticatedRoute>
              }
            />
            {(beTeacher || beAdmin) && (
              <Route path="/dashboard" element={<DashboardComponent />}>
                <Route
                  path="create-course"
                  element={
                    <TeacherAuthenticatedRoute>
                      <CreateCourseComponent />
                    </TeacherAuthenticatedRoute>
                  }
                />
                <Route
                  path="create-lessons"
                  element={
                    <TeacherAuthenticatedRoute>
                      <CreateCourseLessonsComponent />
                    </TeacherAuthenticatedRoute>
                  }
                />
              </Route>
            )}
            <Route path="/login" element={<LoginComponent />} />
            {/* <Route path="/register" element={<RegisterComponent />} /> */}
            <Route
              path="/register"
              element={<RegisterComponentWithHookForm />}
            />
          </Routes>
          <FooterComponent />
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}
