import React from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
function Rules() {
  interface Location {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
  }
  const location: Location = useLocation();
  console.log(location);
  return (
    <main className="container">
      <Navbar />
      <section className="quiz-modal-container">
        <div className="quiz-modal">
          <h2>Quiz Rules</h2>
          <ol className="rules-list">
            <li> There are 5 questions in total.</li>
            <li>Each question carries fifty mark.</li>
            <li>There won't be negative marking for wrong answer.</li>
            <li>
              You won't be able to go back to previous questions after
              attempting so Please do carefully
            </li>
          </ol>
          <div className="btn-center">
            <Link to={location.state.from} className="btn btn-primary">
              Start Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rules;
