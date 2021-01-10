//HTML Element References
var startBtn = document.querySelector("#startbtn");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelectorAll(".option-text");
var testEl = document.querySelector("#test");
var startEl = document.querySelector("#start");

//Functional Variables
var currentQ;
var counter;
var QnA = [
    {
        question: "How are you doing?",
        options: ["good", "bad", "great", "awful"],
        correctA: "good"
    },
    {
        question: "What is the best game?",
        options: ["Dark Souls", "Sekiro", "Bloodborne", "Elden Ring"],
        correctA: "Bloodborne"
    },
    {
        question: "How are you doing?",
        options: ["good", "bad", "great", "awful"],
        correctA: "good"
    },
    {
        question: "What is the best game?",
        options: ["Dark Souls", "Sekiro", "Bloodborne", "Elden Ring"],
        correctA: "Bloodborne"
    },
    {
        question: "How are you doing?",
        options: ["good", "bad", "great", "awful"],
        correctA: "good"
    },
    {
        question: "What is the best game?",
        options: ["Dark Souls", "Sekiro", "Bloodborne", "Elden Ring"],
        correctA: "Bloodborne"
    }
]

//Functions
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
// displays timer.  or resets timer, shows start button, if out of time
function timeStart(){
    var gameTime = setInterval(function(){
        counter--;
        timerEl.textContent=counter;

        if(counter <=0 || currentQ > QnA.length){
            clearInterval(gameTime);
            testEl.setAttribute("class", "hidden");
            startEl.setAttribute("class", "start");
        }
    }, 1000)
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
        console.log("Correct")
    }else {
        console.log("Wrong")
    }
    itterateQuestion()
}

//Event listeners and Invocations
startBtn.addEventListener("click", beginQuiz)
optionsEl.forEach(element=>{
    element.addEventListener("click", checkAndItterate);
})