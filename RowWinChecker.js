
class RowWinChecker {
    CheckWins(board) {

        let resObjectArr = [];

        // let res = "";
        for(let i = 0; i < board.rowsNum; i++){
            let row = board.rows[i];
            let firstSymbol = row[0];
            if (row.every(symbol => symbol.logicalValue === firstSymbol.logicalValue)) {

                let resObject;
                resObject.line = i+1;
                resObject.symbol = symbol.logicalValue;
                resObject.type = "Row";
                resObjectArr.push(resObject);

                // res += firstSymbol.logicalValue;
            }
        }
        return resObjectArr;
        // return res;

    }


}

export default RowWinChecker
