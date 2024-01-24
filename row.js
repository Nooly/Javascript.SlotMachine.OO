
class Row{

    static _SYMBOLS_COUNT = {
        A: 20,
        B: 40,
        C: 60,
        D: 80
    }

    static _symbols;

    static {
        Row._symbols = [];
        for(const [symbol,count] of Object.entries(Row._SYMBOLS_COUNT)){
            for(let i = 0; i < count; i++){
                Row._symbols.push(symbol);
            }
        }
    }

    constructor(columnsNum){
        this.columnsNum = columnsNum;
        this.rowArr = [];
    }

    print(){
        return this.rowArr.join(' | ');
    }

    spin(){
        this.rowArr = [];
        const rowSymbols = [...Row._symbols];
        for ( let i = 0; i < this.columnsNum; i++){
            const randomIndex = Math.floor(Math.random() * rowSymbols.length);
            const selectedSymbol = rowSymbols[randomIndex];
            this.rowArr.push(selectedSymbol);
            rowSymbols.splice(randomIndex, 1);
        }
    }

    checkWins(){
        for (const symbol of this.rowArr){
            if(symbol != this.rowArr[0]){
                return "";
            }
        }

        return this.rowArr[0];
    }

}