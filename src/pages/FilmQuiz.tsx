import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { QuizContext } from "../reducers/quizReducer";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const FilmQuiz = () => {
  const navigate = useNavigate();
  const { quizState, dispatch } = useContext(QuizContext);
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [answers, setAnswers] = useState<String[]>([]);
  const location = useLocation();
  const nextQuestion = (item: string) => {
    setQuizQuestion((prev) => prev + 1);
    setAnswers((prev) => [...prev, item]);
  };
  useEffect(() => {
    dispatch({ type: "filmQuizAnswers", payload: { value: answers } });
    if (quizQuestion === 5) {
      navigate("/results", { state: location });
    }
  }, [quizQuestion]);

  return (
    <>
      <Navbar />
      <section className="quiz-question-modal">
        <div className="quiz-question-container">
          {quizState.filmQuizData.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <p>{quizState.filmQuizData[quizQuestion].question}</p>
          )}
          <div className="quiz-option-container">
            {quizState.filmQuizData.length > 1
              ? quizState.filmQuizData[quizQuestion].options.map((item) => {
                  return (
                    <button
                      key={item}
                      onClick={() => nextQuestion(item)}
                      className="btn btn-primary-outline"
                    >
                      {item}
                    </button>
                  );
                })
              : ""}
          </div>
          <button className="btn btn-primary" onClick={() => nextQuestion("")}>
            Skip
          </button>
        </div>
      </section>
    </>
  );
};

export default FilmQuiz;
