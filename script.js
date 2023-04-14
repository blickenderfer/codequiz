var startButton = document.querySelector("#start-button");
var timeEl = document.querySelector("#time");
var secondsLeft = 30;
var scoreEl = document.querySelector("#score");
var score = 0;
var timerInterval = 0;
var questionEl = document.querySelector("#question");
var answerSection = document.querySelector("#answer-section");
var questionIndex = 0;


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent= `time left: ${secondsLeft}`;
        console.log(questionIndex);
        if(secondsLeft < 1) {
            clearInterval(timerInterval);
            highScores();
        }
        if(questionIndex === 8) {
            clearInterval(timerInterval);
            highScores();
        }
    }, 1000);

}

console.log(secondsLeft);

var timerButton = document.createElement("button");

startButton.addEventListener ("click", function(event){
    startButton.classList.add("hidden");
   

renderQuestion(questionIndex)

    timeEl.textContent= `time left: ${secondsLeft}`;
    setTime();
})

function renderQuestion(index){
    questionEl.classList.remove("hidden");
    questionEl.textContent = questions[index].question;
    answerSection.classList.remove("hidden");
    answerSection.innerHTML=""
    letters= ["a", "b", "c", "d"];
    for(var i = 0; i < letters.length; i++){
        letter = letters[i]
        var button = document.createElement("button");
        button.textContent = questions[index].answers[letter];
        answerSection.append(button);
        button.classList.add("button");
        button.addEventListener ("click", function(event){
            if(event.target.textContent === questions[index].correctAnswer) {
                secondsLeft = secondsLeft +3; 
            } else {
                secondsLeft = secondsLeft -3;
            }
            questionIndex = questionIndex + 1;
            renderQuestion(questionIndex);
    
        })
    }
   
}



var questions = [

    { question: "For what web browser was Javascript originally designed for?",
        answers: {
            a: "Internet Explorer",
            b: "Mosaic",
            c: "Netscape",
            d: "Opera" 
        },
        correctAnswer: "Netscape"
    },

    { question: "Which method should be used if we need to round downward to the nearest integer?",
    answers: {
        a: "math.floor",
        b: "math.log",
        c: "math.random",
        d: "math.ceil" 
    },
    correctAnswer: "math.floor"
    },

    { question: "Which of these statements is a truthy statement?",
    answers: {
        a: "Undefined",
        b: "'0'",
        c: "0",
        d: "null" 
    },
    correctAnswer: "'0'"
    },

    { question: "When referring to HTML elements on a CSS stylesheet, which symbol refers to a class?",
    answers: {
        a: ".",
        b: "`",
        c: "{",
        d: "#" 
    },
    correctAnswer: "."
    },

    { question: "In the following array, what number is the variable 'cuttlefish'? Array: [squids, cuttlefish, octopi, nautilus] ",
    answers: {
        a: "0",
        b: "1",
        c: "2",
        d: "3" 
    },
    correctAnswer: "1"
    },

    { question: "What syntax is used to change the color of text?",
    answers: {
        a: "textcolor",
        b: "fontcolor",
        c: "text-color",
        d: "color" 
    },
    correctAnswer: "color" 
    },

    { question: "When referring to HTML elements on a CSS stylesheet, which symbol refers to an ID?",
    answers: {
        a: ".",
        b: "`",
        c: "{",
        d: "#" 
    },
    correctAnswer: "#"
    },

    { question: "Which of these statements is False?",
    answers: {
        a: " 1 === '1' ",
        b: " '1' == 1 ",
        c: " 1 == [1] ",
        d: " '1'== [1] " 
    },
    correctAnswer: " 1 === '1' "
    },

]

//the issue here is that the screen isn't transitioning to the next screen upon completion of the quiz.


function highScores() {
    var mainEl = document.getElementsByTagName("main")[0]
    mainEl.innerHTML = `<h1>Sorry, you ran out of time!</h1> 
    <p>Enter your initials here</p>
    <input type="text" id="initials"></input>
    <button onclick="saveScore()" id="submitButton">Submit</button>  
    `
}

function saveScore(){
    var mainEl = document.getElementsByTagName("main")[0]
    console.log(document.getElementById("initials").value);
    var initials = document.getElementById("initials").value
    console.log(initials);

    mainEl.classList.add("hidden");
    var endScreen = document.getElementById("highscorecontainer");
    endScreen.classList.remove("hidden"); 
    console.log(endScreen);

    var esInitials = document.getElementById("highScore-1");
    esInitials.innerText = `${initials} ${secondsLeft}`
    console.log(esInitials);
}

//I need a way to rank scores within the local storage.

