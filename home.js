/* ==========================================================
   Password
========================================================== */

const PASSWORD = "my girl";

/* ==========================================================
   Error Messages
========================================================== */

const errorMessages = [
"شەنە؟🙂",
"قەشمەر🥰؟",
"بەجدییە حەیوان؟🙂",
"یانی نازانی؟",
"توخواااا💔",
"وی درم تەقییی💔💔💔💔",
"گاڵتە دەکەیت؟؟",
"مردم کچێ ئەوە نیەەەە😭",
"عەیبە لۆت🙂",
"کچێ ئەوە هەو نیە🗿",
"دوبارە هەڵە؟؟؟",
"نەخێر ئەمجارە دەبا بیزانیت",
"ئەی نزیک بوو😭",
"توخوا ڕادەبوێری؟؟",
"ڕاوەەەە تێکدااااا🙂🙂🙂",
"کچێ شێت بووممممم",
"کەی زانیت بەگەڕێەوە :)",
"خەتای خۆمە عیساب لۆ توو دەکەم🙂",
"کچێ کەرررر هەڵەیە😭😭",
"بێتامت کرد دەزانی؟🙂"
];

/* ==========================================================
   Elements
========================================================== */

const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const statusMessage = document.getElementById("statusMessage");

const welcomeScreen = document.getElementById("welcomeScreen");
const quizIntro = document.getElementById("quizIntro");
const startQuizButton = document.getElementById("startQuizButton");

const quizSection = document.getElementById("quizSection");
const questionNumber = document.getElementById("questionNumber");
const questionTitle = document.getElementById("questionTitle");
const answersContainer = document.getElementById("answersContainer");

/* ==========================================================
   Random Error
========================================================== */

function randomError() {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)];
}
/* ==========================================================
   Check Password
========================================================== */

unlockButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {

    const value = passwordInput.value.trim().toLowerCase();

    if (value === PASSWORD.toLowerCase()) {

        showSuccess();

    } else {

        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 450);

        statusMessage.textContent = randomError();

        statusMessage.classList.remove("fade");
        void statusMessage.offsetWidth;
        statusMessage.classList.add("fade");

        passwordInput.value = "";
        passwordInput.focus();
    }

}

/* ==========================================================
   Success
========================================================== */

function showSuccess() {

    statusMessage.textContent = "ئافەرین قژلولەکەم 🤍";

    statusMessage.classList.remove("fade");
    void statusMessage.offsetWidth;
    statusMessage.classList.add("fade");

    passwordInput.disabled = true;
    unlockButton.disabled = true;

    setTimeout(() => {

        welcomeScreen.classList.remove("hidden");
        welcomeScreen.classList.add("fade");

    }, 700);

    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        quizIntro.classList.remove("hidden");
        quizIntro.classList.add("fade");

    }, 2500);

}
/* ==========================================================
   Quiz Data
========================================================== */

const questions = [

{
    question:"من کێم؟؟",
    answers:[
        "کچەکەت",
        "بەهەشت",
        "هیچ کەس"
    ],
    correct:0
},

{
    question:"حەزم بە چ وڵاتێکە و لۆی دەمرم؟؟؟",
    answers:[
        "هیندستان",
        "ئەمەریکا",
        "بەریتانیا"
    ],
    correct:1
},

{
    question:"ئەمن چم؟؟",
    answers:[
        "مرۆڤ",
        "فریشتە",
        "کانتۆری جلکان"
    ],
    correct:1
},

{
    question:"حەزم بە چیە؟؟",
    answers:[
        "شەنە",
        "پیتزا",
        "کێک"
    ],
    correct:0
}

];

let currentQuestion = 0;


/* ==========================================================
   Start Quiz
========================================================== */

startQuizButton.addEventListener("click", () => {

    quizIntro.classList.add("hidden");

    quizSection.classList.remove("hidden");
    quizSection.classList.add("fade");

    currentQuestion = 0;

    showQuestion();

});


/* ==========================================================
   Show Question
========================================================== */

function showQuestion(){

    const q = questions[currentQuestion];

    questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;

    questionTitle.textContent = q.question;

    answersContainer.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = answer;

        button.addEventListener("click",()=>{

            checkAnswer(index);

        });

        answersContainer.appendChild(button);

    });

}
/* ==========================================================
   Check Answer
========================================================== */

function checkAnswer(selectedIndex){

    const buttons =
    document.querySelectorAll(".answer-button");

    const correctIndex =
    questions[currentQuestion].correct;

    buttons.forEach((button,index)=>{

        button.disabled = true;

        if(index === correctIndex){

            button.classList.add("correct");

        }else if(index === selectedIndex){

            button.classList.add("wrong");

        }

    });

    setTimeout(()=>{

        currentQuestion++;

        if(currentQuestion < questions.length){

            showQuestion();

        }else{

            showFinish();

        }

    },1200);

}


/* ==========================================================
   Finish
========================================================== */

function showFinish(){

    quizSection.innerHTML = `

        <div class="screen-card fade">

            <div class="screen-icon">🎉</div>

            <h2 class="screen-title">

                ئافەرین قژلولەکەم 🤍

            </h2>

            <p class="screen-text">

                هەموو پرسیارەکانت تەواو کرد.
                ئێستا بچین بۆ بەشی وێنەکان 🌸

            </p>

            <button
                id="nextSectionButton"
                class="primary-button">

                Next →

            </button>

        </div>

    `;

    const nextButton =
    document.getElementById("nextSectionButton");

    nextButton.addEventListener("click",()=>{

        window.location.href = "gallery.html";

    });

}
/* ==========================================================
   Small Effects
========================================================== */

passwordInput.focus();

/* Fade animation for status */

statusMessage.classList.add("fade");

/* Prevent double click */

let isLocked = false;

unlockButton.addEventListener("click", () => {

    if(isLocked) return;

    isLocked = true;

    setTimeout(() => {

        isLocked = false;

    },500);

});
