'use strict';

/* View Functions

  a view function takes data a user is interested in
  and returns either an HTML string or DOM elements

  view functions RENDER data into a format that is clear for users
  the rendered data can then be appended to the DOM
  so users can see what is in state

*/

console.log('--- loading view: _');

// either expect or assert, up to you
const _ = chai._;


/**
 *
 */
const _ = () => {

};


const renderQuestion = () => {
 const order = state.answered;
 const questionText = state.questions[order].text;
 const answersLgt = state.questions[order].answers.length;

 document.getElementById('question').innerHTML = questionText;

  for (let i = 0; i < answersLgt; i++) {
    const choice = state.questions[order].answers[i];
    const choiceID = i + 1;
    document.getElementById(choiceID).innerHTML = choice;
  }
 
};

const nextQuestion = () => {
  answered += 1;
  renderQuestion()
  document.getElementById('display').innerHTML = '';

  const questionsLgt = state.questions.length;
  
  if (answered === questionsLgt ) { 
    document.getElementById('next').style.display = 'none';
  }
  
};

// write only one top-level describe in this file
describe('_', () => {
  // write as many nested describes as you would like
  describe('_', () => {
    // write as many it's as you want in each describe
    it('_', () => {
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
