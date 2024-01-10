import React from "react";

import Questions from "./Questions";

const QuestionsList = ({ questionlist }) => {
  return (
    <div>
      {questionlist?.data?.map((question, id) => (
        <Questions key={id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
