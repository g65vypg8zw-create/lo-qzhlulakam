// ==========================================
// Elements
// ==========================================

const title =
document.getElementById("title");

const message =
document.getElementById("message");

const buttons =
document.getElementById("buttons");

const hiddenMessage =
document.getElementById("hiddenMessage");

const continueBox =
document.getElementById("continueBox");

const yesBtn =
document.getElementById("yesBtn");

const whatBtn =
document.getElementById("whatBtn");

const continueBtn =
document.getElementById("continueBtn");


// ==========================================
// Text
// ==========================================

const titleText =
"One Last Question... 🤍";

const messageText =
"Before we continue...\n\nCan you promise me one thing?";


// ==========================================
// Typewriter
// ==========================================

function typeText(element,text,speed,callback){

    let i = 0;

    function typing(){

        if(i < text.length){

            if(text[i] === "\n"){

                element.innerHTML += "<br>";

            }else{

                element.innerHTML += text[i];

            }

            i++;

            setTimeout(typing,speed);

        }else if(callback){

            callback();

        }

    }

    element.innerHTML = "";

    typing();

}
// ==========================================
// Start Animation
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        typeText(title, titleText, 70, () => {

            typeText(message, messageText, 35, () => {

                buttons.style.opacity = "1";

                buttons.style.pointerEvents = "auto";

            });

        });

    }, 800);

});


// ==========================================
// What Is It?
// ==========================================

whatBtn.addEventListener("click", () => {

    hiddenMessage.classList.add("show");

    continueBox.classList.add("show");

    whatBtn.disabled = true;

});
// ==========================================
// Yes, I Promise
// ==========================================

yesBtn.addEventListener("click", () => {

    buttons.style.display = "none";

    hiddenMessage.classList.remove("show");

    continueBox.classList.remove("show");

    title.innerHTML = "Thank you... 🤍";

    message.innerHTML =
    "That means more than you know.";

    startPetals();

    setTimeout(() => {

        window.location.href = "final.html";

    }, 2500);

});


// ==========================================
// Continue
// ==========================================

continueBtn.addEventListener("click", () => {

    window.location.href = "final.html";

});
// ==========================================
// Sakura Petals
// ==========================================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.top = "-40px";

    petal.style.fontSize =
        (18 + Math.random() * 12) + "px";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "9999";

    petal.style.transition = "transform 5s linear, opacity 5s linear";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.style.transform =
            `translate(${(Math.random()*200)-100}px, ${window.innerHeight+100}px) rotate(${Math.random()*360}deg)`;

        petal.style.opacity = "0";

    }, 30);

    setTimeout(() => {

        petal.remove();

    }, 5200);

}

function startPetals() {

    let count = 0;

    const interval = setInterval(() => {

        createPetal();

        count++;

        if (count >= 30) {

            clearInterval(interval);

        }

    }, 180);

}
