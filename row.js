import SymbolPack from "./SymbolPack.js";

class Row {

   
    static _symbol_pack = SymbolPack.getInstance();
    static _symbols = [];

    

    constructor(columnsNum) {
        this.columnsNum = columnsNum;
        this.rowArr = [];
    }

    print() {
        return this.rowArr.join(" | ")
    }

    spin() {
        this.rowArr = []
        this.rowArr = SymbolPack.getXRandomSymbols(this.columnsNum)
        return this.rowArr
    }

    checkWins() {
        for (const symbol of this.rowArr) {
            if (symbol != this.rowArr[0]) {
                return "";
            }
        }

        return this.rowArr[0];
    }
}

export default Row;
