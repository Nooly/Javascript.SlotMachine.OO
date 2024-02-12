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
        for (const symbol of wins) {
            pnl += this.bet * (SymbolPack.getSymbolDollarValue(symbol) + 1);
        }

        this.balance += pnl;
        return pnl;
    }

}

export default AccountMgr;