
class RowWinChecker {
    CheckWins(board) {
        let res = "";
        for(let i = 0; i < board.rowsNum; i++){
            let row = board.rows[i];
            let firstSymbol = row[0];
            if (row.every(symbol => symbol.logicalValue === firstSymbol.logicalValue)) {
                res += firstSymbol.logicalValue;
            }
        }
        return res;
    }
}

export default RowWinChecker
