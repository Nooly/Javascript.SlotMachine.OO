class SymbolFactory {
    static createSymbol(logicalValue, displayValue, description) {
        if (displayValue.length === 2 && displayValue !== "�")
            return new EmojiSymbol(logicalValue, displayValue, description)
        
        else return new RegularSymbol(logicalValue, description);
    }

}
class EmojiSymbol {
    constructor(logicalValue, displayValue, description) {
        this.logicalValue = logicalValue;
        this.displayValue = displayValue;
        this.description = description || `This is a symbol with display value ${displayValue} and logical value ${logicalValue}`;
    }
}
class RegularSymbol {
    constructor(logicalValue, description) {
        this.logicalValue = logicalValue;
        this.displayValue = logicalValue;
        this.description = description || `This is a symbol with display value ${logicalValue} and logical value ${logicalValue}`;
    }
}

export default SymbolFactory;