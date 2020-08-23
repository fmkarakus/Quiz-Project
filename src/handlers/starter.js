'use strict';

console.log('--- loading handler: _');

const _ = (event) => {

};

const checkAnswer = (event) => {
  const button = event.target;
  const buttonVal = parseInt(button.value);
  const order = state.answered;
  const correctAnswer = state.correct;
  const rightAnswer = state.questions[order].correct;
  
  if ((buttonVal - 1) === rightAnswer) {
    document.getElementById('display').innerHTML = 'Correct!';
    answerIsCorrect();
    correctAnswer += 1;
    document.getElementById('score').innerHTML = `<h3>your score is ${correctAnswer}</h3>`
  } else {
    document.getElementById('display').innerHTML = 'Answer is wrong';
    document.getElementById('show').style.display = 'block';
    answerIsWrong();
    document.getElementById('score').innerHTML = `<h3>your score is ${correctAnswer}</h3>`
  }
};

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
