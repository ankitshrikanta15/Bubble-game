var timer = 60;
var score = 0;
var hit;

function increaseScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;


}

function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('.hitval').textContent = hit;
}

function makeBubble() {
    var clutter = ''; 
    for(var i = 1; i <=216; i++) {
         var randomNumber = Math.floor(Math.random() * 10);
         clutter += `<div class="bubble"> ${randomNumber} </div>`
    }
    
    document.querySelector("#panel-bottom").innerHTML = clutter;
}

function timeCount() {
    var timerint = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector('.timeval').textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over <i class="ri-refresh-line"></i></h1>`;
        }
    },1000)
}

function bubbleSelector() {
    document.querySelector("#panel-bottom").addEventListener("click", function(details){
        var numberGet = Number(details.target.textContent);
        if(numberGet === hit) {
            increaseScore();
            makeBubble();
            getNewHit();
        } 
    });
}

makeBubble();
timeCount();
getNewHit();
bubbleSelector();