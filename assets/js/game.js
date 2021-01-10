//HTML Element References
var startBtn = document.querySelector("#startbtn");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelectorAll(".option-text");
var testEl = document.querySelector("#test");
var startEl = document.querySelector("#start");
var scoreEl = document.querySelector('#score');
var restartEl = document.querySelector('#restart')
var answerEl = document.querySelector('#the-answer')

//set stored high score to display on page
var highNameEl = document.querySelector('#high-score-name')
var highEl = document.querySelector('#high-score')

// Displays the highscore and name
highEl.textContent = JSON.parse(window.localStorage.getItem('highScore'));
highNameEl.textContent = localStorage.getItem('highScoreName');

//Functional Variables
var newScore;
var highScoreName;
var setHighScore;
var gameTime;
var setName;
var currentScore = gameTime
var currentQ;
var counter;
// Questions Array
var QnA = [
    {
        question: "How do you save things on a page so that the user can see them when they reopen the page?",
        options: ["saveDisk.showItem", "localStorage.saveItem", "saveDisk.setItem", "localStorage.setItem"],
        correctA: "localStorage.setItem"
    },
    {
        question: "What symbols usally hold an Array?",
        options: ["  {   }  ", "  [  ]  ", "  (  )  ", "  |  |  "],
        correctA: "  [  ]  "
    },
    {
        question: "What does the debugger do to your code?",
        options: ["It removes the errors in the code", "It counts the number of errors in the code", "It pauses the code at that point", "It runs the code without errors"],
        correctA: "It pauses the code at that point"
    },
    {
        question: "What was JavaScript originally called?",
        options: ["Coffee", "Milk", "Sugar", "Mocha"],
        correctA: "Mocha"
    }
       
]

//Functions start
function beginQuiz(){
    counter = 60;
    currentQ = 0;
    displayMain()
    timeStart();
    itterateQuestion();
    
}

// function to make the question visible and hide start button
function displayMain(){
    startEl.setAttribute("class", "hidden");
    testEl.setAttribute("class", "test");
}

var gameTime;
// displays timer.  or resets timer, shows start button if out of time
function timeStart(){
    gameTime = setInterval(function(){
        counter--;
        timerEl.textContent=counter;
//   if the question are done or timer is done reset game AND set current player score
        if(counter <=0 || currentQ > QnA.length){
            localStorage.setItem('playerScore', counter);
            newScore = scoreEl.textContent = localStorage.getItem('playerScore');
            highEl.textContent = JSON.parse(window.localStorage.getItem('highScore'));
            restartQuiz()
            clearInterval(gameTime)
            setHighScore()
                    
        }
        
    }, 1000)
}

// used to reset the game html after playing
function restartQuiz(){
        testEl.setAttribute("class", "hidden");
        startEl.setAttribute("class", "start");
        answerEl.setAttribute("class", "hidden")
        clearInterval(gameTime);
        timerEl.textContent = 60;
        
}

// Var to pull playerscore from storage. Just wanted it closer so you can see it.
var playerScore = localStorage.getItem('playerScore');
var highScore = localStorage.getItem('highScore')

//Set high score but i cant get timeStart function to call setHighScore
function setHighScore(){
     if(counter > localStorage.getItem('highScore') ){
        localStorage.setItem('highScore', counter);
        var highScoreName = window.prompt("New High Score! Please enter your name");
        localStorage.setItem('highScoreName', [highScoreName]);
        highEl.textContent = localStorage.getItem('highScore')
        highNameEl.textContent = localStorage.getItem('highScoreName')
      }else{    
        console.log('why is it not?')
    }   
}

//pulls question and displays it
function itterateQuestion(){
    if(currentQ < QnA.length){
        questionEl.textContent = QnA[currentQ].question;
        for(i=0;i<optionsEl.length;i++){
            optionsEl[i].textContent = QnA[currentQ].options[i]
        }
    }
    currentQ++;
}

//checks to see if question was right or wrong
function checkAndItterate(){
    var prevA = this.textContent;
    if(prevA == QnA[currentQ-1].correctA){
        /// ADD seconds/points if right and display correct. Remove 10 seconds/points if wrong
        counter = counter + 10;
        answerEl.textContent = 'Right! You Got This!';
    }else {
        counter = counter - 10;
        answerEl.textContent = 'Wrong. Oh No!';
    }
    itterateQuestion()
}

//Event listeners and Invocations
startBtn.addEventListener("click", beginQuiz)
optionsEl.forEach(element=>{
    element.addEventListener("click", checkAndItterate);
})
restartEl.addEventListener("click", restartQuiz)