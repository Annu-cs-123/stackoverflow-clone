import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";

const DisplayAnswer = ({ question, handleShare }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);

  const handleDelete = (answerId, noOfAnswer) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswer - 1));
  };
  console.log(user, "jkasfj");
  console.log(question, "hello answer");
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          {console.log(ans)}
          <div className="question-actions-user">
            <div>
              {console.log(
                user?.result?._id === question?.userId,
                "jskajgfkgfhello id user"
              )}
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {user?.result?._id === question?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>

            <div>
              <p>Answer {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/User/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar backgroundColor={"green"} px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
