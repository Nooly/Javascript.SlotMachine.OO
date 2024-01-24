

class IOMgr{
    static getInstance(){
        if (!IOMgr.instance){
            IOMgr.instance = new IOMgr();
        }
        else return IOMgr.instance;
    }

    constructor(){
        if (IOMgr.instance){
            return IOMgr.instance;
        }

        IOMgr.instance = this;
        this._prompt = 
    }

    printMsg(msg){
        console.log(msg);
    }

    getDeposit(){
        while (true){
            let depositeAmount = this._prompt
        }
    }

    getBet(){

    }

    getNumberOfLines(){

    }

    getPlayAgain(){

    }

}