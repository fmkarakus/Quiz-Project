'use strict';
console.log('--- loading listener: _');

document.getElementById('start')
  .addEventListener('click', startQuiz);



  document.getElementById('1')
  .addEventListener('click', checkAnswer);

  document.getElementById('2')
  .addEventListener('click', checkAnswer);

  document.getElementById('3')
  .addEventListener('click', checkAnswer);

  document.getElementById('4')
  .addEventListener('click', checkAnswer);

document.getElementById('next')
  .addEventListener('click', nextQuestion);

