import eventEmitter from './eventEmitter.js';
import { IGameMachine } from "./IGameMachine.js";
import AccountMgr from "./account_mgr.js";
import Board from "./board.js";
import IOMgr from "./iomgr.js";


class SlotMachine {
    static _ROWS = 3;
    static _COLUMNS = 3;

    constructor() {
        this.ioMgr = IOMgr.getInstance();
        this.numberOfLines = new Number();
        this.board = new Board(SlotMachine._ROWS, SlotMachine._COLUMNS);
        this.accountMgr = new AccountMgr(this.board,
            this.ioMgr.getDeposit());

        eventEmitter.on('spin', (index, total, symbolPack) => { // recieves the event 'spin'
            this.displayProgressBar(index, total);
        });
    }

    playRound() {
        this.accountMgr.beginRound(
            this.numberOfLines = this.ioMgr.getNumberOfLines(),
            this.ioMgr.getBet((bet) => (!isNaN(bet) && bet > 0 && bet <= (this.accountMgr.balance / (this.numberOfLines + this.numberOfLines))))
            // TODO: change number of lines to Rows + Cols
            // this.ioMgr.getBet((bet) => (!isNaN(bet) && bet > 0 && bet <= (this.accountMgr.balance / (this.numberOfRows + this.numberOfCols))))
        )

        this.board.spin();
        console.log("\n")
        this.ioMgr.printMsg(this.board.getFormattedString());

        const roundPnl = this.accountMgr.calcPnL();
        // {
        //     winsWithPnl: winsWithPnl,
        //     lossesWithPnl: lossWithPnl,
        //     roundPnl: totalPnl,
        //     updatedBalance: this.balance,
        // }
        const calcSortedWinsPnlDec = roundPnl.winsWithPnl.sort((o1, o2) => o2.pnl - o1.pnl);
        // roundPnl.winsWithPnl
        // [
        //      {line: 1, symbol: A, type: row, hasWin: 1, pnl: pnl},
        //      {line: 1, symbol: A, type: row, hasWin: 1, pnl: pnl},
        //      {line: 1, symbol: A, type: row, hasWin: 1, pnl: pnl},
        // ]
        calcSortedWinsPnlDec.forEach(o => {
            this.ioMgr.printMsg(`in ${o.type} ${o.line} you won ${o.pnl}$ on the symbol ${o.symbol.displayValue} }`);
        });

        roundPnl.lossesWithPnl.forEach(o => {
            this.ioMgr.printMsg(`in ${o.type} ${o.line} you lost ${o.pnl}$}`);
        });

        this.ioMgr.printMsg("your profit/loss in this round is $" + roundPnl.roundPnl)
        this.ioMgr.printMsg("your balance is $" + roundPnl.updatedBalance)
    }

    isGameOver() {
        if (this.accountMgr.balance <= 0) {
            this.ioMgr.printMsg("Game Over")
            return true;
        }
        return false
    }

    getPlayAgain() {
        return this.ioMgr.getPlayAgain();
    }

    displayProgressBar(current, total) {
        const percentage = Math.ceil((current / total) * 100);
        const progress = '#'.repeat(percentage);
        const empty = ' '.repeat(100 - percentage);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`[${progress}${empty}] ${percentage}%`);
    }
}

export default SlotMachine
