//3. Collect bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();

// 1. Deposit Money
const Deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount you want to deposit: ");
        const numberDeposit = parseFloat(depositAmount);

        if (isNaN(numberDeposit) || numberDeposit <= 0) {
            console.log("Invalid deposit amount. Please enter a positive number.");
        } else {
            return numberDeposit;
        }
    }   
}

//2. determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines you want to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please enter a number between 1 and 3.");
        } else {
            return numberOfLines;
        }
    }
}

const depositAmount = Deposit();
const numberOfLines = getNumberOfLines();