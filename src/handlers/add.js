const startQuiz = () => {
  const page1 = document.getElementById("page1");
  const add = document.getElementById("add");
  const quiz = document.getElementById("quiz");
  ;
  

  quiz.style.display = "block";
  add.style.display = "block";
  page1.style.display = "none";
 

  renderQuestion();
 
  
log.push({
  userAction: 'startQuiz',
  quiz,
  
});
console.log(log);
};
