import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { QuizContext } from "../reducers/quizReducer";

const SportsQuiz = () => {
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
    dispatch({ type: "sportsQuizAnswers", payload: { value: answers } });
    if (quizQuestion === 5) {
      navigate("/results", { state: location });
    }
  }, [quizQuestion]);
  return (
    <>
      <Navbar />
      <section className="quiz-question-modal">
        <div className="quiz-question-container">
          {quizState.sportsQuizData.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <p>{quizState.sportsQuizData[quizQuestion].question}</p>
          )}
          <div className="quiz-option-container">
            {quizState.sportsQuizData.length > 1
              ? quizState.sportsQuizData[quizQuestion].options.map((item) => {
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

export default SportsQuiz;
