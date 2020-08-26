// score render
function scoreRender() {
  debugger;
  quiz.style.display = "none";
  const finalPage = document.getElementById("finale-page");
  finalPage.style.display = "block";
  const scorePerCent = Math.round(
    (100 * state.correct) / state.questions.length
  );

  finalPage.children[1].innerHTML = `<h4>Your score is ${scorePerCent}%</h4>`;

  log.push({
    userAction: "score render",
    userScore: scorePerCent,
  });
  console.log(log);
}
