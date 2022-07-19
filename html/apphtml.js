var quizQuestions = [
    {
        question: "Q1 : What does HTML stand for?",
        a: " Home Tool Markup Lauguage",
        b: "Hyperlinks and Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "None all above",
        ans: "ans3"
    },

    {
        question: "Q2 :Who is making the Web Standards",
        a: "The World Wide Web Consoritum",
        b: 'Google',
        c: "Mozilla",
        d: "Microsoft",
        ans: "ans1"
    }
    ,
    {
        question: "Q3 : What is the Correct HTML element for the larger heading:",
        a: "<h6>",
        b: "<head>",
        c: "<heading>",
        d: "<h1>",
        ans: "ans4"

    },
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "none all above",
        ans: "ans1"
    },
    {
        question: "Q5 : what is the correct HTML for adding a background color?",
        a: "<background>yellow</background>",
        b: "<bg>yellow</bg>",
        c: '<body style="background-color:yellow;"',
        d: '<body bg="yellow">',
        ans: "ans3"
    },
    
]

var question = document.querySelector('#question');
var opt1 = document.querySelector('#op1');
var opt2 = document.querySelector('#op2');
var opt3 = document.querySelector('#op3');
var opt4 = document.querySelector('#op4');

var answers = document.querySelectorAll(".rad-input")
var submit = document.querySelector('#submit');

var scoreboard = document.querySelector('#scoreboard');

var questionCount = 0;
var score = 0;
function questionLoad() {

    var questionsList = quizQuestions[questionCount];
    question.innerText = questionsList.question;
    opt1.innerText = questionsList.a;
    opt2.innerText = questionsList.b;
    opt3.innerText = questionsList.c;
    opt4.innerText = questionsList.d;

}

questionLoad();

function getCheckAnswer() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id

        }

    }
    return answer;


}
function deselect() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        answers[i].checked = false;

    }

}



submit.addEventListener("click", () => {

    var checkAnswers = getCheckAnswer();
    if (checkAnswers === quizQuestions[questionCount].ans) {
        score++
        console.log(score)
    }
    else {
        console.log(score)
    }

    questionCount++;
    if (questionCount < quizQuestions.length) {
        questionLoad();
        deselect();
    }
    else if (score > 15) {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quizQuestions.length}  </h3>
            <p classs="succes">You are Great 🏆</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            <button class="btn" onclick ="location.href='../strat/start2.html'";>Home</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')
    }
    else {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quizQuestions.length}  </h3>
            <p class="fail">You are fail 😞</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            <button class="btn" onclick ="location.href='../strat/start2.html'";>Home</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')

    }

})
