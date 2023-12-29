import React from "react";
import { useParams, Link } from "react-router-dom";

import "./Questions.css";
import upVotes from "../../assets/sort-up.svg";
import downVotes from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

const QuestionDetails = () => {
  const { id } = useParams();

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

  return (
    <div className="question-details-page">
      {questionlist === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionlist
            .filter((question) => question.id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upVotes} alt="up votes" width="18" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downVotes} alt="down votes" width="18" />
                    </div>

                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor={"orange"}
                              px="8px"
                              py="5px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {question.noOfAnswer !== 0 && (
                  <section>
                    <h3>{question.noOfAnswer} answers</h3>
                    <DisplayAnswer key={question.id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input
                      type="Submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>

                  <p>
                    Browse other questions tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none" }}
                    ></Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
