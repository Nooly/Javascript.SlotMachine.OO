import SymbolFactory from "./SymbolFactory.js";
class SymbolPack {
    static getInstance() {
        if (!SymbolPack.instance) {
            SymbolPack.instance = new SymbolPack();
        }
        return SymbolPack.instance;
    }

    static _SYMBOL_OBJECTS = {
        A: SymbolFactory.createSymbol("A", "🍌", "Banana"),
        // A: SymbolFactory.createSymbol("A", "�", "Banana"),
        B: SymbolFactory.createSymbol("B", "🍓", "Strawberry"),
        C: SymbolFactory.createSymbol("C", "🍇", "Grapes"),
        D: SymbolFactory.createSymbol("D", "🍏", "Apple"),
        // D: SymbolFactory.createSymbol("D", "🧑🏻", "Apple"),
    }

    static _SYMBOLS_COUNT = {
        A: 20,
        B: 40,
        C: 60,
        D: 80
    }
    constructor() {
        if (!SymbolPack.instance) {
            SymbolPack.instance = this;
            this._symbols = [];
            for (const [symbol, count] of Object.entries(SymbolPack._SYMBOLS_COUNT)) {
                for (let i = 0; i < count; i++) {
                    this._symbols.push(SymbolPack._SYMBOL_OBJECTS[symbol]);
                }
            }
        }
        return SymbolPack.instance;
    }

    static getSymbolDollarValue(symbol) {
        const _SYMBOL_VALUES = {
            A: 20,
            B: 15,
            C: 10,
            D: 5
        }
        return _SYMBOL_VALUES[symbol];
    }

    getXRandomSymbols(columnsNum) {
        const rowSymbols = [...this._symbols];
        return Array.from({ length: columnsNum }, () => {
            const randomIndex = Math.floor(Math.random() * rowSymbols.length);
            return rowSymbols.splice(randomIndex, 1)[0];
        });

    }
}

export default SymbolPack
