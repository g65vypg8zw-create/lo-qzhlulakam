// ==========================================
// Restart Button
// ==========================================

const restartBtn =
document.getElementById("restartBtn");

if(restartBtn){

    restartBtn.addEventListener("click",()=>{

        window.location.href="home.html";

    });

}


// ==========================================
// Floating Hearts
// ==========================================

function createHeart(){

    const heart=document.createElement("span");

    heart.className="floating-heart";

    heart.innerHTML=Math.random()>0.5 ? "🤍" : "🌸";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (5+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}
// ==========================================
// Start Floating Hearts
// ==========================================

setInterval(createHeart,1800);


// ==========================================
// Fade In
// ==========================================

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity 1.2s ease";

    document.body.style.opacity="1";

});
