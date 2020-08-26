const modifyQuestionRender = () => {
  debugger;

  document.getElementById("page1").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("modify-page").style.display = "block";

  let q = state.questions[state.answered];

  document.getElementById("modify-question").value = q.text;
  document.getElementById("opa").value = q.answers[0];
  document.getElementById("opb").value = q.answers[1];
  document.getElementById("opc").value = q.answers[2];
  document.getElementById("opd").value = q.answers[3];
  document.getElementById("l1").value = q.links[0].href;
  document.getElementById("l2").value = q.links[1].href;
  document.getElementById("correctM").selectedIndex = q.correct;

  log.push({
    userAction: "render modify question page",
    questionToBeModified: q,
  });
  console.log(log);
};
