// a list of words
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

// variables
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
    // choose randome word from the wordsList
    let randomWord = wordsList[Math.floor(wordsList.length * Math.random())];
    // for every letter on that word do:
    for (let i = 0; i < randomWord.length; i++) {
        // make a div
        let letter = document.createElement("div");
        // make a paragraph
        let p = document.createElement("p");
        // give a classname to the div
        letter.className = "letter";
        // put the i letter into the p
        p.textContent = randomWord[i];
        // add the p to the div
        letter.appendChild(p);
        // add the div to the word div
        word.appendChild(letter);
    }
    let increment = 0;
    let increment2 = 0;
    let checkWin = 0;
    window.addEventListener("keypress", (e) => {
        document.querySelectorAll(".word p").forEach((lttr) => {
            // if the p is identical to the key the user pressed do:
            if (lttr.textContent == e.key) {
                // add the class show to p for showing it
                lttr.className = "show";
                // increment the var checkwin so that we findout if the user won
                checkWin++;
                // means if all the letter are displayed do:
                if (checkWin == randomWord.length) {
                    // add the class reveal to display the winner panel
                    winner.className += " reveal";
                }
            }
        });
        // in case of the letter was not included on the word and not included on the uniqueKeysOnly list (that for remove duplicate) then do:
        if (
            randomWord.includes(e.key) == false &&
            uniqueKeysOnly.includes(e.key) == false
        ) {
            uniqueKeysOnly.push(e.key);
            let p = document.createElement("p");
            // get the letter from the uniqueKeysOnly list and put it on p
            p.textContent = uniqueKeysOnly[increment];
            // add it to the wronglist
            wrongList.append(p);
            // increment the var so that add the next letters
            increment++;
            // display the parts of the body
            designParts[increment2].className += " display";
            // increment the var for showing the next parts whatever the key is wrong
            increment2++;
            // if all the parts of the body is displayed do:
            if (increment2 == designParts.length) {
                // add the class reveal to display the loser panel
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
