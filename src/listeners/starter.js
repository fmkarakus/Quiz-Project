"use strict";
console.log("--- loading listener: _");

document.getElementById("start").addEventListener("click", startQuiz);
document.getElementById("add").addEventListener("click", addQuestionRender);
document.getElementById("user-action").addEventListener("click", addQuestions);

document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("showResult").addEventListener("click", scoreRender);
document
  .getElementById("modify")
  .addEventListener("click", modifyQuestionRender);
document
  .getElementById("submitChange")
  .addEventListener("click", modifyQuestion);
document.getElementById("1").addEventListener("click", checkAnswer);

document.getElementById("2").addEventListener("click", checkAnswer);

document.getElementById("3").addEventListener("click", checkAnswer);

document.getElementById("4").addEventListener("click", checkAnswer);


document.getElementById("show").addEventListener("click", displaySolution);
document.getElementById("cheat").addEventListener("click", displaySolution);
document.getElementById("restart").addEventListener("click", restart);
