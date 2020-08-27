

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



function removeQuestion() {
    debugger;


    const q = document.getElementById("question");
    const t = 'none';
    const choices = document.getElementById("choices");
    const buttons = document.getElementById("progress").lastChild;

    swal({
            title: "Are you sure?",
            text: "Is it really irrelevant question?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! The question has been deleted!", {
                    icon: "success",
                });
                
                choices.children[0].childNodes[2].nodeValue = t;
                choices.children[1].childNodes[2].nodeValue = t;
                choices.children[2].childNodes[2].nodeValue = t;
                choices.children[3].childNodes[2].nodeValue = t;
                q.innerHTML = '<p><b>This question has been Removed</b></p>';
                buttons.classList.remove("prog");


            } else {
                swal(" you are right it deserves one more look!");
            }
        });





}

/*
*/