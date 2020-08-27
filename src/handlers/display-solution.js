const displaySolution = () => {

     debugger;
     const order = state.answered;
     const rightAnswer = state.questions[order].correct;
     const display = document.getElementById('display');
     const buttons = document.getElementById("progress").children[order];
     display.style.display = 'block';
     display.innerHTML = '<p> your correct answer is option No.' + Number(rightAnswer + 1);
     buttons.classList.add("wrongAnswer");
}

const restart = (e) =>{
    debugger;
    
    const page1 = document.getElementById('page1');
    const last = document.getElementById('finale-page');
    
   if (e.isTrusted){
       window.location.reload();
       page1.style.display = 'block';
       last.style.display = 'none';

   }
}

const displaySources = () => {
    
    let q = state.questions[state.answered];
    const display = document.getElementById('display');
    display.style.display = 'block';
    display.innerHTML = `Go here - ${q.links[0].href} or ${q.links[1].href}`;
    };