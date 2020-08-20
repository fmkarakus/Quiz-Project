# Development Strategy

> `State-project-week-1`

## A Web Quiz

The aim of the project is to build simple web quiz using JS, HTML and CSS. The project will be developed by using branches and project board on GitHub.

## Wireframe

![wireframe](images/wireframe.jpg)

## 0. Set-Up

> repository owner: Fatih

**As a User I can see an empty site at the correct URL**

**As a fellow developer I can see the prepared repository**

### Repo

1. Generate a new repo
2. Create initial README file
3. Turn on GitHub Pages
4. Add collaborators
5. Prepare a project board

---

## 1. HTML&CSS structure

> assigned to Gelila

**As a site visitor, I want to see the website layout and elements**

### Repository

- developed on a branch called `html-css`

### JS

no changes

### HTML

- create buttons for web navigation
- create list items
- div element for each display section
- form element

### CSS

- styling of the html document and its body
- styling of the background, and inner content, links, and buttons

---

## 2. Display question

> \_assigned to \_\_\_\_

**As a site visitor, I want to see quiz question on screen**

### Repository

- developed on a branch called `render-question`

### Handler

- Nothing has changed

### listener

- A `click` event with handler `nextQuestion` is added to 'next` button

### logic

- Nothing has changed

### views

- create `renderQuestion` function that displays the question and its multiple-choices
- create `nextQuestion` function that
  - displays the next question
  - clears the 'display' div
  - hides 'next' button for the last question

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 3. Display progress

> \_assigned to \_\_\_\_

**As a site visitor, I want to see circles as the number of questions to folow up my progress**

### Repository

- developed on a branch called `render-progress`

### Handler

- Nothing has changed

### listener

- Nothing has changed

### logic

- Nothing has changed

### views

- create `progressRender` function that displays small circles for each stored question

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 4. Display score

> \_assigned to \_\_\_\_

**As a site visitor, I want to see my score realtime and at the end of the quiz**

### Repository

- developed on a branch called `scoreRender`

### Handler

- Nothing has changed

### listener

- Nothing has changed

### logic

- Nothing has changed

### views

- create a function called `scoreRender` that
  - calculates the score
  - display the current score
  - at the end of the test displays 'lastPage' div

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 5. Evaluation

> assigned to \_\_\_\_

**As a site visitor, I want to see whether I have answered correctly, see colors of the circles change as I answer the questions, see an option to see the correct answer if i am wrong**

### Repository

- developed on a branch called `evaluation`

### Handler

- create `checkAnswer` function that
  - checks whether the given answer is true or false
  - adds innerHTML 'Correct!' or 'Wrong answer' in div with id='display'
  - if the answer is wrong, changes the display style of button with id='show' to display=block
  - calls `answerIsCorrect` or `answerIsWrong`function
  - updates `score` variable.
  - calls the function `scoreRender`

### listener

- `click` event with handler `checkAnswer` is added to each id in "choices"

### logic

- Nothing has changed

### views

- create `answerIsCorrect` function that turns corresponding small circle into green
- create `answerIsWrong` function that turns corresponding small circle into red

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 6. Start/Restart

> assigned to \_\_\_\_

**As a site visitor, I want to see the rules of the game and start the quiz with a button**

### Repository

- developed on a branch called `start-quiz`

### Handler

- create `startQuiz` function that;

  - hides 'page1' section
  - calls `questionRender` and `progressRender` functions
  - displays 'quiz' div

- create `restartQuiz` function that;
  - hides 'quiz' div
  - resets `score` and `currentQuestion` variables
  - displays 'page1' div

### listener

- A `click` event with handler `startQuiz` is added to the button with id 'start'
- A `click` event with handler `restartQuiz` is added to the button with id 'restart'

### logic

- Nothing has changed

### views

- Nothing has changed

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- display style for 'page1' and 'quiz' changes by JS

---

## 7. Display solution

> assigned to \_\_\_\_

**As a site visitor, I want to be able to see correct answer if i am wrong or cheat**

### Repository

- developed on a branch called `display-solution`

### Handler

- Nothing has changed

### listener

- A `click` event with handler `displaySolution` is added to `show` button
- A `click` event with handler `displaySolution` is added to `cheat` button

### logic

- Nothing has changed

### views

- create a function called `displaySolution` that renders correct answer in the div with id='display'

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 8. Display sources

> assigned to \_\_\_\_

**As a site visitor, I want to be able to see the links to resources of the question**

### Repository

- developed on a branch called `display`

### Handler

- Nothing has changed

### listener

- A `click` event with handler `displaySources` is added to `link` button

### logic

- Nothing has changed

### views

- create a function called `displaySources` that renders sources in the div with id='display'

### data

- Nothing has changed

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 9. Add/delete question

> assigned to \_\_\_\_

**As a site visitor, I want to be able to add or delete a question**

### Repository

- developed on a branch called `add-delete-question`

### Handler

- create a function called `addQuestion` that adds an element to the 'questions' array
- create a function called `removeQuestion` that deletes an element from the 'questions' array

### listener

- A `click` event with handler `addQuestionRender` is added to `add` button
- A `click` event with handler `removeQuestion` is added to `remove` button
- A `click` event with handler `addQuestion` is added to `submit` button

### logic

- Nothing has changed

### views

- create a function called `addQuestionRender` that
  - hides 'quiz' div
  - displays 'addQuestion' div

### data

- 'questions' array is modified

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 10. Modify question

> assigned to \_\_\_\_

**As a site visitor, I want to be able to edit a question**

### Repository

- developed on a branch called `modify-question`

### Handler

- create a function called `modifyQuestion` that updates an existing element in the 'questions' array

### listener

- A `click` event is with handler `modifyQuestionRender` added to `modify` button
- A `click` event is with handler `modifyQuestion` added to `submit` button

### logic

- Nothing has changed

### views

- create a function called `modifyQuestionRender` that
  - hides 'quiz' div
  - displays 'addQuestion' div
  - renders data of the current question on the screen

### data

- 'questions' array is modified

### log

- Nothing has changed

### HTML

- Nothing has changed

### CSS

- Nothing has changed

---

## 11. Documentation

> assigned to \_\_\_\_

**As a site visitor, I want to see a written development strategy file and a README file**

- Update development-strategy.md
- Update README.md

## 12. Finishing Touches

> assigned to \_

- W3C code validation made
- All bugs and errors were fixed
