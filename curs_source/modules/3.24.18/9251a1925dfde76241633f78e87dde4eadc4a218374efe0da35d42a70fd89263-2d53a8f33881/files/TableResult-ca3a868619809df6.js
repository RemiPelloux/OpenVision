var TableResult;
export { TableResult };
var __wakaru_init_TableResult_initialized = false;
export function init_TableResult() {
if (__wakaru_init_TableResult_initialized) return;
__wakaru_init_TableResult_initialized = true;
TableResult = class {
    pages = [];
    mergedTables = [];
    total = 0;
    constructor(total){
        this.total = total;
    }
};

}
