import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GadgetQuiz from "./pages/GadgetQuiz";
import { QuizContext, QuizContextProvider } from "./reducers/quizReducer";
import Rules from "./pages/Rules";
import FilmQuiz from "./pages/FilmQuiz";
import Results from "./pages/Results";
import SportsQuiz from "./pages/SportsQuiz";
import { AuthProvider } from "./reducers/Auth";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/rules"
            element={
              <AuthProvider>
                <Rules />
              </AuthProvider>
            }
          />
          <Route path="/results" element={<Results />} />
          <Route path="/film-quiz" element={<FilmQuiz />} />
          <Route path="/gadget-quiz" element={<GadgetQuiz />} />
          <Route path="/sports-quiz" element={<SportsQuiz />} />
        </Routes>
      </BrowserRouter>
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
