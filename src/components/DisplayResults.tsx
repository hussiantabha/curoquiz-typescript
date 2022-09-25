import React, { useContext } from "react";
import { QuizContext } from "../reducers/quizReducer";
import { FilmData } from "../reducers/quizReducer";
interface DisplayProp {
  data: any;
}
interface FilterProp {
  correct_answer: string;
  options: string[];
  question: string;
}
const DisplayResults = ({ data }: DisplayProp) => {
  const { quizState, dispatch } = useContext(QuizContext);
  const filtered = data.filter((item: FilmData) => item._id <= 5);
  return (
    <>
      <section className="results-container">
        {filtered.map(({ question, correct_answer, options }: FilterProp) => {
          return (
            <div key={question} className="result-quiz-answer-container-card">
              <p>{question}</p>
              <div className="result-quiz-answer-option-container">
                {options.map((item) => {
                  return (
                    <button
                      key={item}
                      className={
                        correct_answer.includes(item)
                          ? " btn btn-success"
                          : "btn"
                      }
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DisplayResults;
