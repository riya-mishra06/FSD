let gameseq = [];
let userSeq = [];
let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

// Start game on any key press
document.addEventListener("keypress", () => {
    if (!started) {
        nextLevel();
        started = true;
    }
});

// Flash effect
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 300);
}

// Generate next level
function nextLevel() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameseq.push(randColor);

    // Flash sequence with delay
    gameseq.forEach((color, idx) => {
        setTimeout(() => {
            let btn = document.querySelector(`.btn-${color}`);
            btnFlash(btn);
        }, idx * 600);
    });
}

// Handle user clicks
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        let clickedColor = this.classList[1].split("-")[1];
        userSeq.push(clickedColor);
        btnFlash(this);

        checkAnswer(userSeq.length - 1);
    });
});

// Check user input
function checkAnswer(currentIndex) {
    if (userSeq[currentIndex] === gameseq[currentIndex]) {
        if (userSeq.length === gameseq.length) {
            setTimeout(nextLevel, 1000);
        }
    } else {
        h2.innerText = "Game Over! Press any key to restart.";
        started = false;
        gameseq = [];
        userSeq = [];
        level = 0;
    }
}
