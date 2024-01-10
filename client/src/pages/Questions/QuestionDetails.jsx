import moment from "moment";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";
import upVotes from "../../assets/sort-up.svg";
import downVotes from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import {
  postAnswer,
  voteQuestion,
  deleteQuestion,
} from "../../actions/question";

const QuestionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [answer, setAnswer] = useState();
  const url = "http://localhost:3000";

  // var questionlist = [
  //   {
  //     id: 1,
  //     upVotes: 3,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function",
  //     questionBody: "It meaant to be",
  //     questionTags: [
  //       "java",
  //       "node js",
  //       "react js",
  //       "mogodb",
  //       "express",
  //       "javascript",
  //     ],
  //     userPosted: "Annu Khatkar",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Khatkar",
  //         answeredOn: "jan 2",
  //         userId: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     upVotes: 7,
  //     downVotes: 3,
  //     noOfAnswer: 26,
  //     questionTitle: "What is a Javscript",
  //     questionBody: "It meaant to be",
  //     questionTags: ["java", "node js", "react js", "mogodb"],
  //     userPosted: "Annu Khatkar",
  //     askedOn: "jan 1",
  //     userId: 2,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 4,
  //     questionTitle: "What is a function",
  //     questionBody: "It meaant to be",
  //     questionTags: ["java", "node js", "R", "Python", "react js", "mogodb"],
  //     userPosted: "Annu Khatkar",
  //     askedOn: "jan 1",
  //     userId: 3,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Khatkar",
  //         answeredOn: "jan 2",
  //         userId: 3,
  //       },
  //     ],
  //   },
  // ];

  const questionlist = useSelector((state) => state.questionReducer);
  const user = useSelector((state) => state.currentUserReducer);

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url: " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", user.result._id));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", user.result._id));
  };

  const handlePostAns = (e, asnwerLength) => {
    e.preventDefault();
    if (user === null) {
      alert("login or signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswer: asnwerLength + 1,
            answerBody: answer,
            userAnswered: user.result.name,
            userId: user.result_id,
          })
        );
      }
    }
  };

  return (
    <div className="question-details-page">
      {questionlist.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionlist.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVotes}
                        alt="up votes"
                        width="18"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downVotes}
                        alt="down votes"
                        width="18"
                        onClick={handleDownVote}
                      />
                    </div>

                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>

                          {user?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>

                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
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
                    <h3>{question.noOfAnswer} Answers</h3>
                    <DisplayAnswer
                      key={question.id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
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
