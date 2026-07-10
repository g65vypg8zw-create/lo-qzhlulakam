// ======================================
// Gallery Animation
// ======================================

const cards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card=>{

observer.observe(card);

});
// ======================================
// Scroll Progress
// ======================================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/height)*100;

if(progressBar){

progressBar.style.width=progress+"%";

}

});
// ======================================
// Floating Hearts
// ======================================

function createHeart(){

const heart=document.createElement("span");

heart.className="floating-heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,1800);
// ======================================
// Continue Button
// ======================================

const continueBtn=document.getElementById("continueBtn");

if(continueBtn){

continueBtn.addEventListener("click",()=>{

window.location.href="final.html";

});

}
