
const Emojis = {
    banana: "🍌",
    strawberry: "🍓",
    grape: "🍇",
    apple: "🍏",
    smile: "😃",
}

const Displays = {
    banana: "A",
    strawberry: "B",
    grape: "C",
    apple: "D",
    smile: "S"
}

class SymbolFactory {
    static createSymbol(value) {
        if (canDisplayEmojis())
            return new EmojiSymbol(Displays[value], Emojis[value])

        else return new RegularSymbol(Displays[value]);
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
        this.displayValue = " " + logicalValue;
        this.description = description || `This is a symbol with display value ${logicalValue} and logical value ${logicalValue}`;
    }
}

function canDisplayEmojis() {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
        process.env.NO_EMOJIS = 'false';
        if (args[i] === '--no-emojis') {
            process.env.NO_EMOJIS = 'true';
        }
    }
    return process.env.NO_EMOJIS === 'true';
}


export default SymbolFactory;
