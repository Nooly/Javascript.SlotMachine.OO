import PromptSync from "prompt-sync";

class IOMgr {
    static getInstance() {
        if (!IOMgr.instance) {
            IOMgr.instance = new IOMgr();
            return IOMgr.instance;
        }
        else return IOMgr.instance;
    }

    constructor() {
        if (IOMgr.instance) {
            return IOMgr.instance;
        }

        IOMgr.instance = this;
        this._prompt = PromptSync();
    }

    printMsg(msg) {
        console.log(msg);
    }

    getDeposit() {
        while (true) {
            let depositeAmount = this._prompt("Enter a deposit amount [100]: ");
            if (depositeAmount.length === 0)
                depositeAmount = 100;

            const numberDepositAMount = parseFloat(depositeAmount);

            if (!isNaN(numberDepositAMount) && numberDepositAMount > 0) {
                this.printMsg(`Your initial balance is ${numberDepositAMount}`);
                return numberDepositAMount;
            }

            this.printMsg("Invalid deposit amount, try again.");


        }
    }

    getNumberOfLines() {
        while (true) {
            let lines = this._prompt("Enter the number of lines to bet on (1-3) [3]: ");
            if (lines.length === 0)
                lines = 3;

            const numberOfLines = parseFloat(lines);

            if (!isNaN(numberOfLines) && numberOfLines > 0 && numberOfLines <= 3) {
                this.printMsg(`You're betting on ${numberOfLines} number of lines.`);
                return numberOfLines;
            }

            this.printMsg("Invalid number of lines to bet on, try again.");
        }
    }

    getBet(validationFunc) {
        while (true) {
            let bet = this._prompt("Enter the bet pet line [$5]: ");
            if (bet.length === 0)
                bet = 5;

            const numberBet = parseFloat(bet);

            if (validationFunc(numberBet)) {
                this.printMsg(`You're betting on ${numberBet}$ per line.`);
                return numberBet;
            }

            this.printMsg("Invalid bet, try again.");
        }
    }



    getPlayAgain() {
        let playAgain = this._prompt("Do you want to play again (y/n) [y]? ");
        if (playAgain.length === 0)
            playAgain = "y";
        return playAgain == "y";
    }

};

export default IOMgr;