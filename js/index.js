const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const firstNumber = document.getElementById("question");

firstNumber.innerText = "What is " + num1 + " multiplied by " + num2 + " ?";

const correctAnswer = num1 * num2;
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

formElement.addEventListener("submit", () => {
  const userAns = +inputElement.value;
  if (userAns === correctAnswer) {
    score++;
    console.log(score);
    updateLocalStorage();
  } else {
    score--;
    console.log(score);
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const pageScore = document.getElementById("score");
pageScore.innerText = `Score: ${score}`;
