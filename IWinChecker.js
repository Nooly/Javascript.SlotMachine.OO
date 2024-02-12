import RowWinChecker from "./RowWinChecker.js";
import ColWinChecker from "./ColWinChecker.js";

class WinCheckerFactory {
    static CreateWinChecker() { //add a checking WinChecker() function to conditionally return a WinChecker
        return [new RowWinChecker(), new ColWinChecker()];
    }
}

export default WinCheckerFactory;
