import eventEmitter from './eventEmitter.js';
import SymbolPack from "./SymbolPack.js";
import WinCheckerFactory from "./IWinChecker.js";

// import Symbol from "./Symbol.js";

class Board {
    constructor(rowsNum, columnsNum) {
        this.rowsNum = rowsNum;
        this.columnsNum = columnsNum;
        this.symbolPack = SymbolPack.getInstance();

        this.rows = Array.from({ length: this.rowsNum }, () => Array.from({ length: this.columnsNum }, () => ""));
        // Initialized this.rows as a two-dimensional array
    };


    spin() {
        const spinNum = 10_000 // spins this number of times, in the end, right now will only show the last spin on display
        for (let i = 0; i < spinNum; i++) {
            this._spin();
            eventEmitter.emit('spin', i+1, spinNum+1, this.symbolPack); // send an event 'spin with information about the board
        }
    }
    _spin() {
        for (let i = 0; i < this.rowsNum; i++) {
            this.rows[i] = this.symbolPack.getXRandomSymbols(this.columnsNum);
        }
    }
    // Updated spin method to fill the two-dimensional array with random symbols

    getFormattedString() { // change this so that it checks the local runtime to see if it supports emojis and returns emojis if yes and logical values if not, use factory
        let res = "";
        this.rows.forEach(row => res += row.map((symbol) => symbol.displayValue).join(" | ") + "\n");
        return res;
    }
    // Updated getFormattedString method to return a string representation of the two-dimensional array

    checkWins(numberOfLines) {
        let res = "";
        let winCheckers = WinCheckerFactory.CreateWinChecker();
        winCheckers.forEach((winChecker, index) => {
            if (index < numberOfLines) {
                res += winChecker.CheckWins(this);
            }
        });
        // if (res.length !== 0)  bug?
        return res;
    }
    // Updated checkWins method to check for wins in the two-dimensional array

}

export default Board;
