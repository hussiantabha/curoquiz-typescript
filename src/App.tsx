import "./App.css";
import Navbar from "./components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "./reducers/quizReducer";
import { SocialIcon } from "react-social-icons";
function App() {
  const location = useLocation();
  const quizState = useContext(QuizContext);
  console.log(quizState);
  return (
    <>
      <Navbar />
      <section className="quiz-card-section-container">
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/film-quiz" }}>
            <div className="quiz-img-container">
              <img src="../assets/films.jpg" className="quiz-img" alt="Suits" />
            </div>
            <div className="quiz-content-container">
              <h2>Movies Quiz</h2>
              <p>Take this quiz to test yourself</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/gadget-quiz" }}>
            <div className="quiz-img-container">
              <img
                src="../assets/gadgets.jpg"
                className="quiz-img"
                alt="startups"
              />
            </div>
            <div className="quiz-content-container">
              <h2>Gadgets Quiz</h2>
              <p>Are you in love with Gadgets like me? Take this quiz</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/sports-quiz" }}>
            <div className="quiz-img-container">
              <img src="../assets/sports.jpg" className="quiz-img" alt="ipl" />
            </div>
            <div className="quiz-content-container">
              <h2>Sports Quiz</h2>
              <p>Are you a Sports Fans? Take this quiz</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
      </section>
      <footer className="footer-quiz">
        <p>Made for Neog by Hussain</p>
        <div className="footer-icon-quiz-container">
          <SocialIcon
            url="https://twitter.com/hussain_tabha"
            className="footer-icon-quiz"
            style={{ width: "28px", height: "28px" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/hussain-tabha-329b081a1/"
            className="footer-icon"
            style={{ width: "28px", height: "28px" }}
          />
          <SocialIcon
            url="https://github.com/hussiantabha"
            className="footer-icon"
            style={{ width: "28px", height: "28px" }}
          />
        </div>
      </footer>
    </>
  );
}

export default App;
