import { createGameMachine } from "./gameFactory.js"
import SlotMachine from "./slot_machine.js";

class Game {
    constructor() {
    }

    start() {
        const gameMachine = createGameMachine();

        while (true) {
            gameMachine.playRound();

            if (gameMachine.isGameOver()) {
                break;
            }

            if (!gameMachine.getPlayAgain())
                break;
        }
    }
}

// Parse command line arguments
// const args = process.argv.slice(2);
// for (let i = 0; i < args.length; i++) {
//     process.env.NO_EMOJIS = 'false';
//     if (args[i] === '--no-emojis') {
//         process.env.NO_EMOJIS = 'true';
//     }
//     console.log("here")
//     console.log(process.env.NO_EMOJIS);

// }

const game = new Game();
game.start();
