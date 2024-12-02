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
const addDice = document.getElementById("addDice");
const subtractDice = document.getElementById("subtractDice");


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

function addDie(die) { // adds or subtracts dice from the dice object, ie dice the user is rolling

    if (addDice.checked) { // checks whether "add" or "subtract" is checked and adds and subtracts dice accordingly
        dice[die]++;
    } else if (subtractDice.checked) {
        dice[die]--;
    }

    chosenDice.textContent = "";
    for (const [die, rolls] of Object.entries(dice)) { // shows what dice the user has selected
        if (rolls != 0) {

            chosenDice.textContent += `${rolls}D${die} +`
        }
    }

}

roll.addEventListener("click", () => { // rolls the user's selected dice
    let total = 0;
    let myRolls = "";
    // modifier.value = 0;
    for (const [die, rolls] of Object.entries(dice)) {
        
        for (let i = 0; i < Math.abs(rolls); i++) {
            let roll = Math.floor(Math.random() * die) + 1;
            if (rolls > 0) {
                total += roll;
                if (myRolls.length > 0) {                    
                    myRolls += ` + `;
                }
                myRolls += `D${die}(${roll})`
            } else if (rolls < 0) {
                total -= roll;
                if (myRolls.length > 0) {                    
                    myRolls += ` `;
                }
                myRolls += `- D${die}(${roll})`
            }
        }       
    }
    if (modifier.value != 0) {
        total += Number(modifier.value);

        myRolls += ` + ${modifier.value}`;
    }
    console.log("you rolled " + total);

    rolls.innerHTML = myRolls;
    result.innerHTML = "You rolled " + total;
})

// To do:
// make display say "- xDx"  instead of "+ -xDx" 
// make display say "- x" instead of "+ -x"
// allow for rolling of subtractive dice
// roll history
// expandable advanced options menu
//  roll with advantage
//  roll with disadvantage
//  lucky feat
//  halfling luck