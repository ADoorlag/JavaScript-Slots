// 1. Deposit Money
//2. determine number of lines to bet on
//3. Collect bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();
const Deposit = () => {
    const depositAmount = prompt("Enter the amount you want to deposit: ");
    const numberDeposit = parseFloat(depositAmount);

    if (isNaN(numberDeposit) || numberDeposit <= 0) {
        console.log("Invalid deposit amount. Please enter a positive number.");
    } else {
        return numberDeposit;
    }
}

Deposit();