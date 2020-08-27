"use strict";

console.log("--- loading handler: _");

const checkAnswer = (event) => {
  debugger;
  const button = event.target;
  const buttonVal = parseInt(button.value);
  const order = state.answered;
  let correctAnswer = state.correct;
  const rightAnswer = state.questions[order].correct;
  var inputRadios = document.getElementsByName('color');
  if (button.checked === true) {
    for (var i = 0; i < inputRadios.length; i++) {
      inputRadios[i].disabled = true;
    }
  }

  if (buttonVal - 1 === rightAnswer) {
    document.getElementById("display").innerHTML = "Correct!";
    document.getElementById("display").style.display = "block";
    answerIsCorrect();
    correctAnswer += 1;
    state.correct += 1;
    document.getElementById(
      "score"
    ).innerHTML = `<h3>your score is ${correctAnswer}</h3>`;
  } else {
    document.getElementById("display").innerHTML = "Answer is wrong";
    document.getElementById("display").style.display = "block";
    document.getElementById("show").style.display = "block";
    answerIsWrong();
    document.getElementById(
      "score"
    ).innerHTML = `<h3>your score is ${correctAnswer}</h3>`;
  }
};

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
