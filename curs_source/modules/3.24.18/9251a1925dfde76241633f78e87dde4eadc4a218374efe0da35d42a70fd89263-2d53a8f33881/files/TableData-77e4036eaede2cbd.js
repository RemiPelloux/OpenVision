var TableData;
export { TableData };
var __wakaru_init_TableData_initialized = false;
export function init_TableData() {
if (__wakaru_init_TableData_initialized) return;
__wakaru_init_TableData_initialized = true;
TableData = class {
    minXY;
    maxXY;
    rows;
    rowPivots;
    colPivots;
    constructor(minXY, maxXY, rowPivots, colPivots){
        this.minXY = minXY;
        this.maxXY = maxXY;
        this.rows = [];
        this.rowPivots = rowPivots;
        this.colPivots = colPivots;
    }
    findCell(x, y) {
        if (x >= this.minXY.x && y >= this.minXY.y && x <= this.maxXY.x && y <= this.maxXY.y) {
            for (const row of this.rows){
                for (const cell of row){
                    if (cell.minXY.x <= x && cell.minXY.y <= y && cell.maxXY.x >= x && cell.maxXY.y >= y) {
                        return cell;
                    }
                }
            }
        }
        return void 0;
    }
    get cellCount() {
        return this.rows.reduce((acc, row)=>acc + row.length, 0);
    }
    get rowCount() {
        return this.rows.length;
    }
    check() {
        const virtualCellCount = (this.colPivots.length - 1) * (this.rowPivots.length - 1);
        let allCellCount = 0;
        for (const row of this.rows){
            for (const cell of row){
                const count2 = (cell.colspan || 1) * (cell.rowspan || 1);
                allCellCount += count2;
            }
        }
        if (virtualCellCount !== allCellCount) {
            return false;
        }
        return true;
    }
    toArray() {
        const tableArr = [];
        for (const row of this.rows){
            const rowArr = [];
            for (const cell of row){
                let text4 = cell.text.join("");
                text4 = text4.replace(/^[\s]+|[\s]+$/g, "");
                text4 = text4.trim();
                rowArr.push(text4);
            }
            tableArr.push(rowArr);
        }
        return tableArr;
    }
};

}
