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
        let pnl = -1 * this.bet * this.numberOfLines;

        const wins = this.board.checkWins(this.numberOfLines);
        // wins looks like this now
        // [
        //      {line: 1, symbol: A, checker: row, pnl: pnl},
        //      {line: 2, symbol: B, checker: row, pnl: pnl},
        //      {line: 1, symbol: A, checker: col, pnl: pnl},
        //      {line: 2, symbol: B, checker: col, pnl: pnl},
        // ]
        // const newWins = wins.map()

        let pnlObject = {
            wins:
                [
                    { line: 1, symbol: A, checker: row, pnl: pnl },
                    { line: 2, symbol: B, checker: row, pnl: pnl },
                    { line: 1, symbol: A, checker: col, pnl: pnl },
                    { line: 2, symbol: B, checker: col, pnl: pnl },
                ],
            losses: [
                [
                    { line: 1, checker: row, pnl: pnl },
                    { line: 2, checker: row, pnl: pnl },
                    { line: 1, checker: col, pnl: pnl },
                    { line: 2, checker: col, pnl: pnl },
                ],
            ],
            roundPnl: 1,
            updatedBalance: 1,
        }


        for (const symbol of wins) {
            pnl += this.bet * (SymbolPack.getSymbolDollarValue(symbol) + 1);
        }

        this.balance += pnl;
        return pnl;
    }

}

export default AccountMgr;