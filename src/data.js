/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
  // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
  questions: [
    {
      text: "What are the different ways to declare a JS variable?",
      answers: [
        "constant, let, variable",
        "var, const, let, function",
        "var, let, const",
        "None of above",
      ],
      correct: 2,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/variables",
        },
        {
          text: "Tyler McGinnis",
          href: "https://ui.dev/var-let-const/",
        },
      ],
    },
    {
      text: "What does `typeof` do?",
      answers: [
        "changes the type of a primitive value",
        "returns a string describing the type of a value",
        "determines if a value is primitive",
        "can tell the difference between arrays and objects",
      ],
      correct: 1,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          href:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
    {
      text: "Which of the following is a disadvantage of using JavaScript?",
      answers: [
        "Client-side JavaScript does not allow the reading or writing of files.",
        "JavaScript can not be used for Networking applications because there is no such support available.",
        "JavaScript doesn't have any multithreading or multiprocess capabilities.",
        "All of the above.",
      ],
      correct: 3,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          href:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
    {
      text:
        "Which built-in method removes the last element from an array and returns that element?",
      answers: ["last()", "get()", "pop()", "None of the above."],
      correct: 2,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          href:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
    {
      text: "Which built-in method sorts the elements of an array?",
      answers: [
        "changeOrder(order)",
        "order()",
        "sort()",
        "None of the above.",
      ],
      correct: 2,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          href:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
    {
      text:
        "Which of the following function of Number object returns the number's value?",
      answers: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
      correct: 2,
      selected: -1,
      links: [
        {
          text: "javascript.info",
          href: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          href:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
  ],
};
