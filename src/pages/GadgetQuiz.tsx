import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { QuizContext } from "../reducers/quizReducer";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
const GadgetQuiz = () => {
  const navigate = useNavigate();
  const { quizState, dispatch } = useContext(QuizContext);
  const [gadgetData, setGadgetData] = useState([]);
  const [quizQuestion, setQuizQuestion] = useState(0);
  const location = useLocation();
  const [answers, setAnswers] = useState<String[]>([]);
  const nextQuestion = (item: string) => {
    setQuizQuestion((prev) => prev + 1);
    setAnswers((prev) => [...prev, item]);
  };
  useEffect(() => {
    dispatch({ type: "gadgetQuizAnswers", payload: { value: answers } });
    if (quizQuestion === 5) {
      navigate("/results", { state: location });
    }
  }, [quizQuestion]);
  return (
    <>
      <Navbar />
      <section className="quiz-question-modal">
        <div className="quiz-question-container">
          {quizState.quiz1Data.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <p>{quizState.quiz1Data[quizQuestion].question}</p>
          )}
          <div className="quiz-option-container">
            {quizState.quiz1Data.length > 1
              ? quizState.quiz1Data[quizQuestion].options.map(
                  (item: string) => {
                    return (
                      <button
                        key={item}
                        onClick={() => nextQuestion(item)}
                        className="btn btn-primary-outline"
                      >
                        {item}
                      </button>
                    );
                  }
                )
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

export default GadgetQuiz;
