

function addQuestions() {
    event.preventDefault();

    const q = document.getElementById('q').value;
    const A = document.getElementById('opA').value;
    const B = document.getElementById('opB').value;
    const C = document.getElementById('opC').value;
    const D = document.getElementById('opD').value;
    const l1 = document.getElementById('L1').value
    const l2 = document.getElementById('L2').value;
    const sel = document.getElementById("correctA");
    const option = sel.options[sel.selectedIndex].value;


    const addNewQuestion = addQuestion(q, A, B, C, D, option, l1, l2);

    const question = state.questions;
    question.push(addNewQuestion);

    const page1 = document.getElementById("page1");
    const addPage = document.getElementById('add-page');

    addPage.style.display = "none";
    page1.style.display = "block";

    log.push({
        state: deepClone(state)
    });
    console.log(log);
};