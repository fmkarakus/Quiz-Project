// render progress
function renderProgress() {
  debugger;
  let lastQuestion = state.questions.length - 1;
  document.getElementById("progress").innerHTML = "";
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    document.getElementById("progress").innerHTML +=
      "<div class='prog' id=circle" + qIndex + "></div>";
  }
}
