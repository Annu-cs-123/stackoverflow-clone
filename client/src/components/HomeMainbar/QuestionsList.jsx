import React from "react";

import Questions from "./Questions";

const QuestionsList = ({ questionlist }) => {
  return (
    <div>
      {questionlist.map((question) => (
        <Questions question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
