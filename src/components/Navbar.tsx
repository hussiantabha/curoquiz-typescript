import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";

const Navbar = () => {
  const { quizState, dispatch } = useContext(QuizContext);
  const logout = () => {
    sessionStorage.clear();
    dispatch({ type: "userLoggedIn", payload: { value: false } });
  };
  return (
    <nav className="nav">
      <div>
        <Link to={"/"} className="colorWhite">
          <h2>CuroQuiz</h2>
        </Link>
      </div>
      <div>
        {quizState.userLoggedIn ? (
          <button className="btn btn-primary btn-nav" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary btn-nav">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
