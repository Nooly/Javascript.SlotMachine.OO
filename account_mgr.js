import SymbolPack from "./SymbolPack.js";
import Board from "./board.js";

class AccountMgr {

    constructor(board, balance) {
        this.balance = balance;
        this.board = board;
        this.numberOfLines = 0; // improves performance of the v8 engine
        this.bet = 0;
    }

    beginRound(numberOfLines, bet) {
        this.numberOfLines = numberOfLines;
        this.bet = bet;
    }

    calcPnL() {

        const winsAndLosses = this.board.checkWins(this.numberOfLines);

        //      {line: 1, symbol: A, type: row, hasWin: 1},
        // console.log(winsAndLosses)
        const winsWithPnl = winsAndLosses
            .filter(o => o.hasWin === 1)
            .map(o => ({ ...o, pnl: this.bet * (SymbolPack.getSymbolDollarValue(o.symbol.logicalValue) + 1) })); // adds pnl
        const lossWithPnl = winsAndLosses
            .filter(o => o.hasWin === 0)
            .map(o => ({ ...o, pnl: -this.bet }));

        //      {line: 1, symbol: A, type: row, hasWin: 1, pnl: pnl},

        const roundWinsPnl = winsWithPnl.reduce((acc, o) => acc + o.pnl, 0); // calculates total pnl on this collection
        const roundLosssPnl = lossWithPnl.reduce((acc, o) => acc + o.pnl, 0);

        const totalPnl = roundLosssPnl + roundWinsPnl;

        this.balance += totalPnl; // updates balance

        return {
            winsWithPnl: winsWithPnl,
            lossesWithPnl: lossWithPnl,
            roundPnl: totalPnl,
            updatedBalance: this.balance,
        }

    }

}

export default AccountMgr;