import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";
import DisplayResults from "../components/DisplayResults";
const Results = () => {
  interface Location {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
  }
  const { quizState, dispatch } = useContext(QuizContext);
  const location: Location = useLocation();
  const fromPath = location.state.pathname;
  const navigate = useNavigate();
  const correct = quizState.gadgetQuizAnswers.filter((item1) =>
    quizState.quiz1Data.some((item2) => item1 === item2.correct_answer)
  );
  const filmCorrectAnswers = quizState.filmQuizAnswers.filter((item1) =>
    quizState.filmQuizData.some((item2) => item1 === item2.correct_answer)
  );
  const sportsCorrectAnswers = quizState.sportsQuizAnswers.filter((item1) =>
    quizState.sportsQuizData.some((item2) => item1 === item2.correct_answer)
  );
  return (
    <>
      <Navbar />
      <main className="results-top-container">
        <div>
          {fromPath === "/film-quiz" ? (
            <h4>
              Correct Answers {filmCorrectAnswers.length}/
              {quizState.filmQuizData.length - 1}
            </h4>
          ) : fromPath === "/gadget-quiz" ? (
            <h4>
              Correct Answers {correct.length}/{quizState.quiz1Data.length - 1}
            </h4>
          ) : (
            <h4>
              Correct Answers {sportsCorrectAnswers.length}/
              {quizState.sportsQuizData.length - 1}
            </h4>
          )}
        </div>
        <div>
          <h4>
            Points:
            {fromPath === "/gadget-quiz"
              ? `${correct.length * 50}`
              : fromPath === "/film-quiz"
              ? `${filmCorrectAnswers.length * 50}`
              : `${sportsCorrectAnswers.length * 50}`}
          </h4>
        </div>
      </main>
      <DisplayResults
        data={
          fromPath === "/gadget-quiz"
            ? quizState.quiz1Data
            : fromPath === "/film-quiz"
            ? quizState.filmQuizData
            : quizState.sportsQuizData
        }
      />
    </>
  );
};

export default Results;
