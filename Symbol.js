class Symbol {
    constructor(logicalValue, displayValue,  description) {
        this.displayValue = displayValue;
        this.logicalValue = logicalValue;
        this.description = description || `This is a symbol with display value ${displayValue} and logical value ${logicalValue}`;
    }
}

export default Symbol;
