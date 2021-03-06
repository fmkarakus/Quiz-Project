'use strict';
console.log('--- loading logic: _');

// either expect or assert, up to you
const _ = chai._;


/**
 *
 */
const addQuestion = (text, a1, a2, a3, a4, correctAnswer, link1, link2) => {

  let newObject = {};
  newObject.text = text;
  newObject.answers = [a1, a2, a3, a4, ];
  newObject.correct = Number(correctAnswer);
  newObject.link = [{
    link1,
    link2
  }];
  return newObject;
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

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
