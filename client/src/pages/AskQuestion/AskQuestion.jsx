import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionTags, setQuestionTags] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

  const User = useSelector((state) => state.currentUserReducer);
  console.log(User, "userQuestion");
  const heandleEnter = (e) => {
    console.log(e, "hello");
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "/n");
    }
  };

  console.log(User, "hello");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      askQuestion(
        {
          questionBody,
          questionTags,
          questionTitle,
          userPosted: User.result.name,
          userId: User?.result._id,
        },
        navigate
      )
    );
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        {questionBody}
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                cols="30"
                rows="10"
                onKeyDown={heandleEnter}
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
