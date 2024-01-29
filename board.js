import Row from "./row.js"


class Board {

    constructor(rowNum, columnNum) {
        this.rowNum = rowNum;
        this.columnNum = columnNum;

        this.rows = []; // collection of Row(s)
        for (let i = 0; i < this.rowNum; i++) {
            this.rows.push(new Row(this.columnNum));

        }
    }


    spin() {
        this.rows.forEach(row => row.spin());
    }

    getFormattedString() {
        let res = "";
        this.rows.forEach(row => res += row.print() + "\n");
        return res;
    }

    checkWins() {
        let res = "";
        this.rows.forEach(row => res += row.checkWins());
        return res;
    }


}

export default Board;