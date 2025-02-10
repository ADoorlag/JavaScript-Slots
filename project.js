//5. Check if the user won
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();

// Constants
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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

//3. Collect bet amount
const getBetAmount = (balance, lines) => {
    while (true) {
        const betAmount = prompt("Enter the amount you want to bet per line: ");
        const numberBetAmount = parseFloat(betAmount);

        if (isNaN(numberBetAmount) || numberBetAmount <= 0 || numberBetAmount > balance / lines) {
            console.log("Invalid bet amount. Please enter a positive number less than your balance per line.");
        } else {
            return numberBetAmount;
        }    
    }
}

//4. Spin the slot machine
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels
}


let balance = Deposit();
const numberOfLines = getNumberOfLines();
const betAmount = getBetAmount(balance, numberOfLines);