import Board from "./board.js"

class AccountMgr {

    static _SYMBOL_VALUE = {
        A: 20,
        B: 15,
        C: 10,
        D: 5
    };

    constructor(board, balance) {
        this.board = board;
        this.balance = balance;
        this.numberOfLines = 0;
        this.bet = 0;
    }

    beginRound(numberOfLines, bet) {
        this.numberOfLines = numberOfLines;
        this.bet = bet;
    }

    calcPnL() {
        let pnl = -1 * this.bet * this.numberOfLines;

        const wins = this.board.checkWins();
        for (const symbol of wins) {
            pnl += this.bet * (AccountMgr._SYMBOL_VALUE[symbol] + 1);
        };

        this.balance += pnl;
        return pnl;
    }
}

export default AccountMgr;