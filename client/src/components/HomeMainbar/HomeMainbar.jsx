import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./HomeMainbar.css";
import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {
  var questionlist = [
    {
      id: 1,
      upVotes: 3,
      downVotes: 5,
      noOfAnswer: 2,
      questionTitle: "What is a function",
      questionBody: "It meaant to be",
      questionTags: [
        "java",
        "node js",
        "react js",
        "mogodb",
        "express",
        "javascript",
      ],
      userPosted: "Annu Khatkar",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Khatkar",
          answeredOn: "jan 2",
          userId: 1,
        },
      ],
    },
    {
      id: 2,
      upVotes: 7,
      downVotes: 3,
      noOfAnswer: 26,
      questionTitle: "What is a Javscript",
      questionBody: "It meaant to be",
      questionTags: ["java", "node js", "react js", "mogodb"],
      userPosted: "Annu Khatkar",
      askedOn: "jan 1",
      userId: 2,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswer: 4,
      questionTitle: "What is a function",
      questionBody: "It meaant to be",
      questionTags: ["java", "node js", "R", "Python", "react js", "mogodb"],
      userPosted: "Annu Khatkar",
      askedOn: "jan 1",
      userId: 3,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Khatkar",
          answeredOn: "jan 2",
          userId: 3,
        },
      ],
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const user = 1;

  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button to="/AskQuestion" className="ask-btn" onClick={checkAuth}>
          Ask Question
        </button>
      </div>

      <div>
        {questionlist === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.length} questions</p>
            <QuestionsList questionlist={questionlist} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
