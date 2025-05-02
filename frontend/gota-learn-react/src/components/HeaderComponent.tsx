import { useContext, useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import { isAdmin, isInstructor, isLoggedIn, isStudent } from "../service/auth.service";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../App";
export default function HeaderComponent() {

  const [havedLoggedIn, setHavedLoggedIn] = useState(false);
  const [havedTeacher, setHavedTeacher] = useState(false);
  const [havedAdmin, setHavedAdmin] = useState(false);
  const beStudent = isStudent();

  useEffect(() => {
    setHavedLoggedIn(isLoggedIn());
    setHavedTeacher(isInstructor());
    setHavedAdmin(isAdmin());
  }, [havedLoggedIn, havedTeacher, havedAdmin]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

  const {cartItems} = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FaChalkboardTeacher size={30} className="me-2" /> GotaLearn
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {
                havedLoggedIn && (<li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link" to={"/login"}>
                    Logout
                  </Link>
                </li>)
              }
              {
                havedLoggedIn && beStudent && (<li className="nav-item">
                  <Link className="nav-link" to={"/my-learning"}>
                    My Learning
                  </Link>
                </li>)
              }
              {
                !havedLoggedIn && (<li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>)
              }
              {
                !havedLoggedIn && (<li className="nav-item">
                  <Link className="nav-link" to={"/register"}>
                    Register
                  </Link>
                </li>)
              }
              {
                havedLoggedIn && (havedAdmin || havedTeacher) && (<li className="nav-item">
                  <Link className="nav-link" to={"/dashboard"}>
                    Dashboard
                  </Link>
                </li>)
              }
            </ul>
            <div>
              <Link className="nav-link" to="/checkout">
                <span className="me-2 badge bg-white text-dark">{cartItems.length}</span>
                <FaCartShopping size={55} className="me-4 p-xl-3" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}