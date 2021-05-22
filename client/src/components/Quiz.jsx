import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

const Quiz = ({ currentQuiz, setDisplay }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="container" id="quiz-div">
      <Typography variant="h2" component="h2">{currentQuiz.name}</Typography>
      <Typography variant="p" component="p">Question {currentQuestion + 1} / {currentQuiz.questions.length}</Typography>
      <div id="question-content-div">
        <div id="question-title-div">
          <Typography variant="h3" component="h3">{currentQuiz.questions[currentQuestionIndex].text}</Typography>
        </div>
          <Typography variant="p" component="p">{currrentQuiz.questions[currentQuestionIndex].answers[0]}</Typography>
      </div>
    </div>
  )

};

export default Quiz;