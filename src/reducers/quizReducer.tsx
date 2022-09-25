import { createContext, useReducer, useEffect } from "react";
type QuizContextType = {
  quizState: QuizState;
  dispatch: React.Dispatch<Action>;
};

interface ContextProp {
  children: React.ReactNode;
}
export type FilmData = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  options: string[];
  question: string;
  type: string;
  _id: number;
};
interface QuizState {
  quiz1Data: FilmData[];
  gadgetQuizAnswers: [];
  filmQuizData: FilmData[];
  filmQuizAnswers: [];
  sportsQuizData: FilmData[];
  sportsQuizAnswers: [];
  userLoggedIn: boolean;
}
type Action =
  | {
      type: "addquiz1Data";
      payload: any;
    }
  | {
      type: "gadgetQuizAnswers";
      payload: any;
    }
  | {
      type: "addFilmQuizData";
      payload: {
        value: FilmData[];
      };
    }
  | {
      type: "filmQuizAnswers";
      payload: any;
    }
  | {
      type: "addSportsQuizData";
      payload: any;
    }
  | {
      type: "sportsQuizAnswers";
      payload: any;
    }
  | {
      type: "userLoggedIn";
      payload: {
        value: boolean;
      };
    };
const QuizContext = createContext<QuizContextType>({
  quizState: {
    quiz1Data: [],
    gadgetQuizAnswers: [],
    filmQuizData: [],
    filmQuizAnswers: [],
    sportsQuizData: [],
    sportsQuizAnswers: [],
    userLoggedIn: false,
  },
  dispatch: () => {},
});
const QuizContextProvider = ({ children }: ContextProp) => {
  const getQuiz1Data = async () => {
    const getData = await fetch(
      "https://opentdb.com/api.php?amount=6&category=30&difficulty=medium&type=multiple"
    );
    if (getData.status === 200) {
      const convertedJSON = await getData.json();
      const newArr = await convertedJSON.results.map(
        (item: any, index: number) => {
          return {
            ...item,
            options: [...item.incorrect_answers, item.correct_answer],
            _id: index + 1,
          };
        }
      );
      dispatch({ type: "addquiz1Data", payload: { value: newArr } });
    }
  };
  const getFilmQuizData = async () => {
    const getData = await fetch(
      "https://opentdb.com/api.php?amount=6&category=11&difficulty=medium&type=multiple"
    );
    if (getData.status === 200) {
      const convertedJSON = await getData.json();
      const newArr = await convertedJSON.results.map(
        (item: any, index: number) => {
          return {
            ...item,
            options: [...item.incorrect_answers, item.correct_answer],
            _id: index + 1,
          };
        }
      );
      dispatch({ type: "addFilmQuizData", payload: { value: newArr } });
    }
  };
  const getSportsQuizData = async () => {
    const getData = await fetch(
      "https://opentdb.com/api.php?amount=6&category=21&difficulty=hard&type=multiple"
    );
    if (getData.status === 200) {
      const convertedJSON = await getData.json();
      const newArr = await convertedJSON.results.map(
        (item: any, index: number) => {
          return {
            ...item,
            options: [...item.incorrect_answers, item.correct_answer],
            _id: index + 1,
          };
        }
      );
      dispatch({ type: "addSportsQuizData", payload: { value: newArr } });
    }
  };
  const reducerFunc = (state: QuizState, action: Action) => {
    switch (action.type) {
      case "addquiz1Data": {
        return { ...state, quiz1Data: action.payload.value };
      }
      case "gadgetQuizAnswers": {
        return { ...state, gadgetQuizAnswers: action.payload.value };
      }
      case "addFilmQuizData": {
        return { ...state, filmQuizData: action.payload.value };
      }
      case "filmQuizAnswers": {
        return { ...state, filmQuizAnswers: action.payload.value };
      }
      case "addSportsQuizData": {
        return { ...state, sportsQuizData: action.payload.value };
      }
      case "sportsQuizAnswers": {
        return { ...state, sportsQuizAnswers: action.payload.value };
      }
      case "userLoggedIn": {
        return { ...state, userLoggedIn: action.payload.value };
      }
      default: {
        return { ...state };
      }
    }
  };
  const [quizState, dispatch] = useReducer(reducerFunc, {
    quiz1Data: [],
    gadgetQuizAnswers: [],
    filmQuizData: [],
    filmQuizAnswers: [],
    sportsQuizData: [],
    sportsQuizAnswers: [],
    userLoggedIn: false,
  });
  useEffect(() => {
    getQuiz1Data();
    getFilmQuizData();
    getSportsQuizData();
    if (sessionStorage.getItem("token") === null) {
      dispatch({ type: "userLoggedIn", payload: { value: false } });
    } else if (sessionStorage.getItem("token") === "undefined") {
      dispatch({ type: "userLoggedIn", payload: { value: false } });
    } else {
      dispatch({ type: "userLoggedIn", payload: { value: true } });
    }
  }, []);
  return (
    <QuizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export { QuizContext, QuizContextProvider };
