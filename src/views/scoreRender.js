// score render
function scoreRender() {
  debugger;
  quiz.style.display = "none";
  const finalPage = document.getElementById("finale-page");
  finalPage.style.display = "block";
  // // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round(
    (100 * state.correct) / state.questions.length
  );

  finalPage.children[1].innerHTML = `<h4>Your score is ${scorePerCent}%</h4>`;
}
