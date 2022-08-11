var startBtn = document.querySelector("#startBtn")
var questionDiv = document.querySelector("#question")
var answers = document.querySelector(".answerContainer")
var answerBtns = document.querySelectorAll(".answerBtn")
var currentIndex = 0
var timeRemaining = 20
var timer = document.querySelector("#timer")
// var scoresList; //Define structure that I want to save to local storage
var questionsEl = document.querySelector("#question")
var scoresList = localStorage.getItem("scoresList"); //
var initials = document.querySelector('#initials')
var grade = document.querySelector('#savedScore')
var saveBtn = document.querySelector('#saveBtn')
var scoreCard = document.querySelector('.card')
console.log(scoresList)
var score = 0
let timerInterval
var scoreBtn = document.querySelector('#scoreBtn')

var records = JSON.parse(localStorage.getItem("record")) || [];


startBtn.addEventListener("click", startGame)
// Still need to add function to call saveBtn.addEventListener("click",)

function startGame() {
    startBtn.style.display = "none"
    questionDiv.style.display = "block"
    answers.style.display = "grid"
    scoreBtn.style.display= "none"
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
        score++
    } else {
        alert('Incorrect!')
    }
    currentIndex++
    if (currentIndex < questions.length) {
        setQuestion()
    } else {
        endQuiz()
    }

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
    timerInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = `Time Remaining:${timeRemaining}s`;
        // Below block returns the page to its original form upon time reaching "0"
        if (timeRemaining === 0) {
            endQuiz()
        }
    }, 1000);
}
function endQuiz() {
    clearInterval(timerInterval);
    startBtn.style.display = "block"
    questionDiv.style.display = "none"
    answers.style.display = "none"
    scoreCard.style.display = "block"
}
function saveScore() {
    console.log('Testing')
    var initialInput = document.querySelector("#initials")
    var initials = initialInput.value
    var record = {
        initials: initials,
        score: score
    }

    records.push(record)

    localStorage.setItem("record", JSON.stringify(records))

    window.location = "index.html"
}
document.querySelector("#saveBtn").addEventListener("click", saveScore)

scoreBtn.addEventListener("click", function () {
    window.location = 'scores.html'
})
// Game-over scenario after last question or timer runs out
// Place function where appropriate
// Check local storage activities