
class ColWinChecker {
    CheckWins(board) {
        // let res = "";

        let resObjectArr = [];

        for(let i = 0; i < board.columnsNum; i++){
            let col = board.rows.map(row => row[i]);
            let firstSymbol = col[0];
            if (col.every(symbol => symbol.logicalValue === firstSymbol.logicalValue)) {

                let resObject = {};
                resObject.line = i+1;
                resObject.symbol = col[0];
                resObject.type = "Col";
                resObject.hasWin = 1;
                resObjectArr.push(resObject);

                // res += firstSymbol.logicalValue;
            }
            else{
                let resObject = {};
                resObject.line = i+1;
                resObject.symbol = "";
                resObject.type = "Col";
                resObject.hasWin = 0;
                resObjectArr.push(resObject);
            }
        }
        return resObjectArr;
        // return res;
    }
}

export default ColWinChecker;
