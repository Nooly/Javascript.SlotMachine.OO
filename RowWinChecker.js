
class RowWinChecker {
    CheckWins(board) {

        let resObjectArr = [];

        // let res = "";
        for (let i = 0; i < board.rowsNum; i++) {
            let row = board.rows[i];
            let firstSymbol = row[0];
            if (row.every(symbol => symbol.logicalValue === firstSymbol.logicalValue)) {

                let resObject = {};
                resObject.line = i + 1;
                resObject.symbol = row[0];
                resObject.type = "Row";
                resObject.hasWin = 1;
                resObjectArr.push(resObject);

                // res += firstSymbol.logicalValue;
            }
            else {
                let resObject = {};
                resObject.line = i + 1;
                resObject.symbol = "";
                resObject.type = "Row";
                resObject.hasWin = 0
                resObjectArr.push(resObject);
            }
        }
        return resObjectArr;
        // return res;

    }


}

export default RowWinChecker
