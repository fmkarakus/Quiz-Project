"use strict";

/* View Functions

  a view function takes data a user is interested in
  and returns either an HTML string or DOM elements

  view functions RENDER data into a format that is clear for users
  the rendered data can then be appended to the DOM
  so users can see what is in state

*/

console.log("--- loading view: _");

// either expect or assert, up to you
// const _ = chai._;

// /**
//  *
//  */
// const _ = () => {};

const answerIsCorrect = () => {
  const order = state.answered;
  const buttons = document.getElementById("progress").children[order];

  buttons.classList.add("rightAnswer");
  buttons.classList.remove("prog");
  buttons.classList.remove("wrongAnswer");
};

const answerIsWrong = () => {
  const order = state.answered;
  const buttons = document.getElementById("progress").children[order];

  buttons.classList.add("wrongAnswer");
  buttons.classList.remove("prog");
  buttons.classList.remove("rightAnswer");
};
const renderQuestion = () => {
  debugger;
  const order = state.answered;
  const questionText = state.questions[order].text;
  const answersLgt = state.questions[order].answers.length;

  document.getElementById("question").innerHTML = questionText;

  for (let i = 0; i < answersLgt; i++) {
    const choice = state.questions[order].answers[i];
    const choiceID = i + 1;
    let choices = document.getElementById("choices");
    choices.children[i].childNodes[2].nodeValue = choice;
  }
};

const nextQuestion = () => {
  debugger;
  var radios = document.getElementsByName('color');
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = false;
    radios[i].checked = false;
  }
  state.answered += 1;
  renderQuestion();
  document.getElementById("display").innerHTML = "";
  document.getElementById("display").style.display = "none";
  document.getElementById("show").style.display = "none";
  const questionsLgt = state.questions.length;

  if (state.answered === questionsLgt - 1) {
    document.getElementById("next").style.display = "none";
    document.getElementById("showResult").style.display = "block";
  }
};

// write only one top-level describe in this file
describe("_", () => {
  // write as many nested describes as you would like
  describe("_", () => {
    // write as many it's as you want in each describe
    it("_", () => {
      // have only one assertion inside each it
    });
  });
});

/* view functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
