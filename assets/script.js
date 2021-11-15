// Start of JS for the timer in the top right corner
var timerEl = document.getElementById('time');

function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1){
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time: 0";
        };
    }, 1000)

    //code dealing with getting the answer from the user
    var resultEl = document.getElementById('result');
    var quizAnswer = document.querySelector(".quiz-answers");

    quizAnswer.addEventListener("click", function(e) {
        var element = e.target;

        var num = element.dataset.number;

        if(num == answer){
            resultEl.textContent = "Correct!";
        } else {
            resultEl.textContent = "Wrong!";
            timeLeft = timeLeft - 10;
        }
    });
};

timer();
//End of Code for the timer function

//creating object to be used to store question and answers
var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');

//setting up the initial question
question.textContent = "Commonly used data types DO NOT Include:";
ans1.textContent = "1. Strings";
ans2.textContent = "2. Booleans";
ans3.textContent = "3. Alerts";
ans4.textContent = "4. Numbers";
var answer = 3;

//array containing the potential questions and answers
const potentialQues = [
    "The condition in an if/else statement is enclosed with ___________.",
    "Arrays in JavaScript can be used to store ________.",
    "String values must be enclosed within ________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is.",
];

const potentialAns = [
    ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
    ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
    ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"],
];

const correctAns = [
    1,
    4,
    3,
    4,
];