var quizQuestions = [
    {
        question: "Q1 : Inside which HTML element do we put the JavaScript?",
        a: " <javascript>",
        b: " <script>",
        c: " <scripting>",
        d: " <js>",
        ans: "ans2"
    },

    {
        question: "Q2 : adding or removing the elements from any index by",
        a: "slice",
        b: 'push',
        c: "splice",
        d: "a & b",
        ans: "ans3"
    }
    ,
    {
        question: "Q3 : Where is the correct place to insert a JavaScript?",
        a: "body",
        b: "head",
        c: "div",
        d: "a & b",
        ans: "ans1"

    }
    ,

    
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
            <button class="btn" onclick ="location.href='answerjs.html'";>check Answers</button>
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
            <button class="btn" onclick ="location.href='answerjs.html'";>check Answers</button>
            <button class="btn" onclick ="location.href='../strat/start2.html'";>Home</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')

    }

})
