//global variable to return your final score
var finalScore = 0;
var counter = 0;

// Start of JS for the timer in the top right corner
var timerEl = document.getElementById('time');

function timer() {
    var timeLeft = 75;

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

        console.log(timeLeft);

        if(num == answer){
            resultEl.textContent = "Correct!";
            if(counter < 4){
                counter++;
                changeQuestion(counter);
            } else {
                finalScore = timeLeft;
                finalResult(finalScore);
                return finalScore;
            }
            if(timeLeft <= 0){
                finalScore = 0;
                finalResult(finalScore);
                return finalScore;
            }
        } else {
            resultEl.textContent = "Wrong!";
            timeLeft = timeLeft - 10;
            if(timeLeft <= 0){
                finalScore = 0;
                finalResult(finalScore);
                return finalScore;
            }
        }
    });
};
//End of Code for the timer function

//creating object to be used to store question and answers
var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var answer;

//array containing the potential questions and answers
const potentialQues = [
    "Commonly used data types DO NOT Include:",
    "The condition in an if/else statement is enclosed with ___________.",
    "Arrays in JavaScript can be used to store ________.",
    "String values must be enclosed within ________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is."
];

const potentialAns = [
    ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
    ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
    ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"]
];

const correctAns = [
    3,
    3,
    4,
    3,
    4
];

//funciton to change the question
function changeQuestion(num) {
    question.textContent = potentialQues[num];
    ans1.textContent = potentialAns[num][0];
    ans2.textContent = potentialAns[num][1];
    ans3.textContent = potentialAns[num][2];
    ans4.textContent = potentialAns[num][3];
    answer = correctAns[num];
};

changeQuestion(counter);
timer();

//Function to display the your final score
function finalResult(num){
    var highScore = document.getElementById('highscore');
    var initials = document.getElementsByClassName('initials');

    question.textContent = "All Done!"

    highScore.textContent = "Your final score was: " + num;

    ans1.style.display = "none";
    ans2.style.display = "none";
    ans3.style.display = "none";
    ans4.style.display = "none";

    for(let i=0; i<initials.length; i++){
        initials[i].style.display = "inline-block";
    }
};