
# Slots Game

A simple command-line slots game built with JavaScript. This game allows players to deposit money, place bets on slot lines, and spin to win based on matching symbols.

## Features

- Deposit money to start playing.

- Choose the number of lines to bet on (1-3).

- Place a bet amount per line.

- Spin the slot machine and win based on matching symbols.

- Automatically calculates winnings and updates your balance.

- Play multiple rounds until you run out of money or choose to exit.

## How to run the Game

### Prerequisites

- Node.js must installed on your machine. If it's not, you can install it from here: https://nodejs.org/en

### Setup
    
1. Clone the repository or download the code.
2. Navigate to the project directory.

## Install Dependencies

This project uses the prompt-sync package for user input.

Run the following command to install it:

    npm install prompt-sync

## Run the Game

Execute the following command:

    node project.js
    
## How to Play

1. Enter the amount you want to deposit.

2. Choose how many lines to bet on (1-3).

3. Enter the amount to bet per line.

4. Spin the slot machine and check if you win!

5. Continue playing until you run out of money or decide to stop.

## Game Logic

- Deposit: Players enter an initial balance to start the game.

- Bet: Players choose how many lines to bet on and the amount to wager per line.

- Spin: The game randomly generates slot symbols across 3 rows and 3 columns.

- Win Check: Players win if all symbols on a line match. Winnings are calculated based on the symbol's value and the bet amount.

- Replay: Players can continue playing or cash out their winnings.

## Symbol Values

- A: 5x the bet amount (2 occurrences in the reel)

- B: 4x the bet amount (4 occurrences in the reel)

- C: 3x the bet amount (6 occurrences in the reel)

- D: 2x the bet amount (8 occurrences in the reel)

## Example Output:

    Enter the amount you want to deposit: 100
    You have a balance of $100
    Enter the number of lines you want to bet on (1-3): 3
    Enter the amount you want to bet per line: 5
    C | B | A
    D | D | D
    B | A | B
    You won: $10
    Do you want to play again? (y/n): y

## Customization

- Modify the SYMBOLS_COUNT and SYMBOL_VALUES objects to adjust the symbol frequency and payout.

## License

This project is licensed under the MIT License.

## Contributions

Feel free to fork the repository and submit pull requests to improve the game!

## Author

Developed by Alex Doorlag.


