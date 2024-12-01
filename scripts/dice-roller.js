const d4 = document.getElementById("d4");
const d6 = document.getElementById("d6");
const d8 = document.getElementById("d8");
const d10 = document.getElementById("d10");
const d12 = document.getElementById("d12");
const d20 = document.getElementById("d20");
const d100 = document.getElementById("d100");
const chosenDice = document.getElementById("chosenDice");
const modifier = document.getElementById("modifier");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
const rolls = document.getElementById("rolls");


const dice = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
    100: 0
}


d4.addEventListener("click", () => {   
    addDie(4);
});
d6.addEventListener("click", () => {   
    addDie(6);
});
d8.addEventListener("click", () => {   
    addDie(8);
});
d10.addEventListener("click", () => {   
    addDie(10);
});
d12.addEventListener("click", () => {   
    addDie(12);
});
d20.addEventListener("click", () => {   
    addDie(20);
});
d100.addEventListener("click", () => {   
    addDie(100);
});

function addDie(die) {

    dice[die]++;
    
    console.log(dice);
    chosenDice.textContent = "";
    for (const [die, rolls] of Object.entries(dice)) {
        if (rolls > 0) {
            chosenDice.textContent += `${rolls}D${die} +`
        }
    }

}

roll.addEventListener("click", () => {
    let total = 0;
    let myRolls = "";
    for (const [die, rolls] of Object.entries(dice)) {
        for (let i = 0; i < rolls; i++) {
            let roll = Math.floor(Math.random() * die) + 1;
            total += roll;
            myRolls += `D${die}(${roll}) + `;
        }       
    }
    total += Number(modifier.value);
    console.log("you rolled " + total);
    myRolls += modifier.value;
    rolls.innerHTML = myRolls;
    result.innerHTML = "You rolled " + total;
})

