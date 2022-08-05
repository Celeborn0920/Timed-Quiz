var startBtn = document.querySelector("#startBtn")
var questionDiv = document.querySelector("#question")
var answers = document.querySelector(".answerContainer")
var answerBtns = document.querySelectorAll(".answerBtn")
var currentIndex = 0
var timeRemaining = 60
var timer = document.querySelector("#timer")
// var scoresList; //Define structure that I want to save to local storage
var questionsEl = document.querySelector("#question")
var scoresList = localStorage.getItem("scoresList"); //
var initials = document.querySelector('#initials')
var grade = document.querySelector('#savedGrade') 
var saveBtn = document.querySelector ('#saveBtn')
var scoreCard = document.querySelector('.card')
console.log(scoresList)

startBtn.addEventListener("click", startGame)
// Still need to add function to call saveBtn.addEventListener("click",)

function startGame() {
    startBtn.style.display = "none"
    questionDiv.style.display = "block"
    answers.style.display = "grid"
    setQuestion()
    setTime()
}

function setQuestion() {
    questionDiv.textContent = questions[currentIndex].title
    answerBtns[0].textContent = questions[currentIndex].options[0]
    answerBtns[1].textContent = questions[currentIndex].options[1]
    answerBtns[2].textContent = questions[currentIndex].options[2]
    answerBtns[3].textContent = questions[currentIndex].options[3]

    answerBtns[0].addEventListener("click", checkAnswer)
    answerBtns[1].addEventListener("click", checkAnswer)
    answerBtns[2].addEventListener("click", checkAnswer)
    answerBtns[3].addEventListener("click", checkAnswer)

}

function checkAnswer(event) {
    var userAnswer = (event.target.textContent)
    var correctAnswer = questions[currentIndex].answer
    if (userAnswer === correctAnswer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
    currentIndex++
    setQuestion()
}

var questions = [
    {
        title: "JavaScript is a ___side programming language?",
        options: ["Client", "Server", "Both", "Neither"],
        answer: "Client",
    },
    {
        title: "Which of the following type of variable is visible only within a function where it is defined?",
        options: ["Global Variable", "Local Variable", "Both", "Neither"],
        answer: "Local Variable",
    },
    {
        title: "Which built-in method returns the calling string value converted to upper case?",
        options: ["toUpperCase()", "toUpper()", "changeCase()", "None of the above"],
        answer: "toUpperCase()",
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        options: ["<Javascript", "<script>", "<js>", "scripting"],
        answer: "<script>",
    },
    {
        title: "Where should you place the javascript in HTML?",
        options: ["In the head", "At the top of the body", "At the bottom of the body", "Any of the above"],
        answer: "At the bottom of the body",
    }
]

function setTime() {
    let timerInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = `Time Remaining:${timeRemaining}s`;
        // Below block returns the page to its original form upon time reaching "0"
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            startBtn.style.display = "block"
            questionDiv.style.display = "none"
            answers.style.display = "none"
            scoreCard.style.display = "block"
        }
    }, 1000);
}

console.log(questions)

function saveLastScore() {
    // Save related form data as an object
    var studentGrade = {
      student: student.value,
      grade: grade.value,
      comment: comment.value.trim()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  }

// Game-over scenario after last question or timer runs out
// Place function where appropriate
// Check local storage activities 