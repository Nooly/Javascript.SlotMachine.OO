import SlotMachine from "./slot_machine.js"
import IOMgr from './iomgr.js'

class Game {

    constructor() {
    }
    start() {
        const ioMgr = IOMgr.getInstance();
        const slotMachine = new SlotMachine();   

        while (true) {
            slotMachine.playAround();

            if (slotMachine.isGameOver()) {
                ioMgr.printMsg("You ran out of money!");
                break;
            }
            if (!ioMgr.getPlayAgain())
                break;
        }
    }
}

const game = new Game();
game.start();