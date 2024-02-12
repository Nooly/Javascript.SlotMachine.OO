
const Emojis = {
    banana : "🍌",
    strawberry: "🍓",
    grape: "🍇",
    apple: "🍏",
    smile: "😃",
}

const Displays = {
    banana : "A",
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
    let terminalType = process.env.TERM;
    if (terminalType == undefined)
        terminalType = getTerminalType();
    // Check if the terminal type is known to support emojis
    const supportedTerminalTypes = [
        'xterm',
        'xterm-256color',
        'iterm',
        'Windows Terminal',
        'gnome-terminal', // GNOME Terminal (Linux)
        'konsole', // Konsole (KDE Plasma)
        'alacritty', // Alacritty (GPU-accelerated terminal)
        'kitty', // Kitty (cross-platform GPU-based terminal)
        'hyper', // Hyper (Electron-based terminal)
        'terminator', // Terminator (Linux terminal emulator)
        'tilix', // Tilix (GTK3 tiling terminal emulator)
        'st', // Simple Terminal (suckless terminal)
        'termite', // Termite (keyboard-centric terminal)
        'urxvt', // rxvt-unicode (terminal emulator for X)
        'stterm', // Another variant of Simple Terminal
        'kterm', // KTerm (KDE terminal emulator)
        'xfce4-terminal', // XFCE4 Terminal (Xfce desktop environment)
        'terminology', // Enlightenment Terminal (Terminology)
        'lilyterm', // LilyTerm (Lightweight and efficient terminal emulator)
        'cool-retro-term', // Cool Retro Term (Vintage terminal emulator)
        'pantheon-terminal', // Pantheon Terminal (elementary OS)
        'powershell', // PowerShell (Windows)
        // Add more terminal types as needed
    ];
    return supportedTerminalTypes.includes(terminalType);
}


function getTerminalType() {
    try {
        return execSync('tty -s && echo "$TERM" || echo "unknown"').toString().trim();
    } catch (error) {
        return 'unknown';
    }
}


export default SymbolFactory;