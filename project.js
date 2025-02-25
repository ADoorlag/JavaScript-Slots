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

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
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

//5. Check if the user won
const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }    
}

//6. Give the user their winnings
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings
}

//7. Play again
const game = () => {
    let balance = Deposit();

    while (true) {
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const betAmount = getBetAmount(balance, numberOfLines);
        balance -= betAmount * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, betAmount, numberOfLines);
        balance += winnings;
        console.log("You won: $" + winnings.toString());

        if (balance <= 0) {
            console.log("You ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n): ").toLowerCase();
        if (playAgain !== "y") {
            break;
        }
    }
}

game();



