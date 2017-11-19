function beginQuiz() {

  document.getElementById('start').style.display = "none";
document.getElementById('question-one').style.display = 'block';

}

function checkAnswer() {
let question1 = document.quiz.q_one.value;
  if (question1 == "Yuri Gagarin") {
      alert("Correct! 1 out of 10 so far.");
  } else {
      alert("Wrong! 0 out of 10 so far");
  }
}

function nextQuestion() {

  let x = document.getElementById('question-two');
  let y = document.getElementById('question-one');
    if(x.style.display === "none" && y.style.display !== "none") {
      x.style.display = "block";
      y.style.display = "none"
    } else {
      x.style.display = "none";
    }

}
