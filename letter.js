// ==========================================
// Elements
// ==========================================

const envelope =
document.getElementById("envelope");

const paper =
document.getElementById("letterPaper");

const paragraphs =
document.querySelectorAll(".letter-paragraph");

let opened = false;


// ==========================================
// Open Envelope
// ==========================================

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {

        paper.classList.add("show");

        showParagraphs();
        startPetals();
        startSparkles();
        scrollToLetter();
    },700);

});


// ==========================================
// Show Paragraphs
// ==========================================

function showParagraphs(){

    paragraphs.forEach((paragraph,index)=>{

        setTimeout(()=>{

            paragraph.classList.add("show");

        },index*350);

    });

}
// ==========================================
// Falling Petals
// ==========================================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.fontSize =
        (18 + Math.random() * 14) + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 9000);

}

function startPetals() {

    let count = 0;

    const interval = setInterval(() => {

        createPetal();

        count++;

        if (count >= 12) {

            clearInterval(interval);

        }

    }, 300);

}
// ==========================================
// Auto Scroll
// ==========================================

function scrollToLetter() {

    setTimeout(() => {

        paper.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 1200);

}


// ==========================================
// Sparkles
// ==========================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left =
        (window.innerWidth * 0.3 + Math.random() * window.innerWidth * 0.4) + "px";

    sparkle.style.top =
        (200 + Math.random() * 250) + "px";

    sparkle.style.fontSize =
        (12 + Math.random() * 10) + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 1800);

}

function startSparkles() {

    let count = 0;

    const interval = setInterval(() => {

        createSparkle();

        count++;

        if (count >= 10) {

            clearInterval(interval);

        }

    }, 180);

}

const continueBtn = document.getElementById("continueBtn");

setTimeout(() => {
    continueBtn.classList.add("show");
}, paragraphs.length * 350 + 1000);
continueBtn.addEventListener("click", () => {
    window.location.href = "gallery.html";
});
