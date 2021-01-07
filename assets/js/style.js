let docEl = document.getElementById;
let qSelect = document.querySelector;
let high = document.getElementById("#high");
let restart = document.getElementById("#restart");
let score = document.getElementById("#score");
let displayTime = document.getElementById("#time");
let question = document.getElementById("#question");
let a = document.getElementById("#A");
let b = document.getElementById("#B");
let c = document.getElementById("#C");
let d = document.getElementById("#D");
let startbtn = document.getElementById("#startbtn");
let theAns = document.getElementById("#theAns");
let ansList = document.getElementById("#answerlist");
let options = Array.from(document.querySelector('.option-text'));

let timer = 30;
let highscore = 0;
let score = 0;
let questionsCounter = 0
let availableQuestions = []

let questions = [
    {
        questions: 'how do you spell java?',
        option1: 'javva',
        option2: 'jaava',
        option3: 'java',
        option4: 'gava',
        answer: 3,
        
    },
    {
        questions: 'how do you spell boomba?',
        option1: 'javva',
        option2: 'jaava',
        option3: 'java',
        option4: 'boomba',
        answer: 4,
        
    },
    {
        questions: 'how do you spell willow?',
        option1: 'willow',
        option2: 'jaava',
        option3: 'java',
        option4: 'gava',
        answer: 1,
        
    },
    {
        questions: 'how do you spell mamba?',
        option1: 'javva',
        option2: 'kobe!',
        option3: 'java',
        option4: 'gava',
        answer: 2,
        
    },

];

let earnedPoints = 25;
let maxQuestions = 4

startGame = function() {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuest()
}
 
getNewQuest = function(){
    if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
        localStorage.setItem('currentScore', score)
        
    }

    questionsCounter++
    prog
}





let again = function (message) {
    document.querySelector('.startbtn').textContent = message;
};

let appear = function (appear) {
    document.querySelector('.answerlist').style.display = 'none';
};



document.querySelector('startbtn').addEventListener('click', function(){
    
})

// HELPP test question place holder to appear only after first click
// document.querySelector('.startbtn').addEventListener
// ('click', function (appear){}) 

// document.querySelector('.time')


