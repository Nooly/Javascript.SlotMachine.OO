
class ColWinChecker {
    CheckWins(board) {
        let res = "";
        for(let i = 0; i < board.columnsNum; i++){
            let col = board.rows.map(row => row[i]);
            let firstSymbol = col[0];
            if (col.every(symbol => symbol.logicalValue === firstSymbol.logicalValue)) {
                res += firstSymbol.logicalValue;
            }
        }
        return res;
    }
}

export default ColWinChecker;
