// Emojis / Displays can be in a differnet form / outside data / config file / server / default is here
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
    process.env.EMOJIS = 'true';
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--no-emojis') {
            process.env.EMOJIS = 'false';
        }
    }
    return process.env.EMOJIS === 'true';
}


export default SymbolFactory;
