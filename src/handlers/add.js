const startQuiz = () => {
  const page1 = document.getElementById("page1");
  const add = document.getElementById("add");
  const quiz = document.getElementById("quiz");
  quiz.style.display = "block";
  add.style.display = "block";
  page1.style.display = "none";

  renderQuestion();
  renderProgress();

  log.push({
    userAction: "startQuiz",
    quiz,
  });
  console.log(log);
};


function addQuestionRender() {
  debugger;
  const page1 = document.getElementById("page1");
  const add = document.getElementById('add-page');

  page1.style.display = "none";
  add.style.display = "block";
}
