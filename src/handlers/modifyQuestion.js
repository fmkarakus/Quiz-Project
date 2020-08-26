const modifyQuestion = () => {
  debugger;
  event.preventDefault();
  let q = state.questions[state.answered];

  q.text = document.getElementById("modify-question").value;
  q.answers[0] = document.getElementById("opa").value;
  q.answers[1] = document.getElementById("opb").value;
  q.answers[2] = document.getElementById("opc").value;
  q.answers[3] = document.getElementById("opd").value;
  q.links[0].href = document.getElementById("l1").value;
  q.links[1].href = document.getElementById("l2").value;
  q.correct = document.getElementById("correctM").value;

  log.push({
    userAction: "modify question",
    modifiedQuestion: state.questions[state.answered],
  });
  console.log(log);

  document.getElementById("quiz").style.display = "block";
  document.getElementById("modify-page").style.display = "none";
  renderQuestion();
};
