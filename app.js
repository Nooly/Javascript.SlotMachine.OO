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

const game = new Game();
game.start();
