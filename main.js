let wordsList = [
    "joker",
    "interface",
    "beautiful",
    "elephant",
    "apple",
    "akward",
    "dimension",
    "football",
    "islam",
    "prey",
    "windows",
    "algeria",
    "expression",
    "einstein",
    "zambia",
    "seqeunce",
    "kind",
    "belaili",
    "mension",
    "description",
    "microphone",
    "computer",
    "macintouch",
    "software",
    "facebook",
    "thoughtful",
    "fibonacci",
];

let wrongList = document.querySelector(".wrongList");
let word = document.querySelector(".word");
let designParts = document.querySelectorAll(".design .person");
designParts = Array.from(designParts);
let uniqueKeysOnly = [];
let winner = document.querySelector(".winner");
let winnerBtn = document.querySelector(".winner button");
let loser = document.querySelector(".loser");
let loserBtn = document.querySelector(".loser button");

window.onload = function () {
    let randomWord = wordsList[Math.floor(wordsList.length * Math.random())];
    for (let i = 0; i < randomWord.length; i++) {
        let letter = document.createElement("div");
        let p = document.createElement("p");
        letter.className = "letter";
        p.textContent = randomWord[i];
        letter.appendChild(p);
        word.appendChild(letter);
    }
    let increment = 0;
    let increment2 = 0;
    let checkWin = 0;
    console.log(randomWord.length);
    window.addEventListener("keypress", (e) => {
        document.querySelectorAll(".word p").forEach((lttr) => {
            if (lttr.textContent == e.key) {
                lttr.className = "show";
                checkWin++;
                if (checkWin == randomWord.length) {
                    winner.className += " reveal";
                }
            }
        });
        if (
            randomWord.includes(e.key) == false &&
            uniqueKeysOnly.includes(e.key) == false
        ) {
            uniqueKeysOnly.push(e.key);
            let p = document.createElement("p");
            p.textContent = uniqueKeysOnly[increment];
            wrongList.append(p);
            increment++;
            designParts[increment2].className += " display";
            increment2++;
            if (increment2 == designParts.length) {
                loser.className += " reveal";
            }
        }
    });
};

winnerBtn.onclick = function () {
    location.reload();
};
loserBtn.onclick = function () {
    location.reload();
};
