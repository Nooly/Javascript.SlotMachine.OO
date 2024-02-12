// import SlotMachine from "./slot_machine.js";

class IGameMachine{
    playRound() {
        throw new Error('playRound method must be implemented');
    }

    isGameOver() {
        throw new Error('isGameOver method must be implemented');
    }

    getPlayAgain() {
        throw new Error('getPlayAgain method must be implemented');
    }
}



export { IGameMachine };