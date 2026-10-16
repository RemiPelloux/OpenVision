var TextResult;
export { TextResult };
var __wakaru_init_TextResult_initialized = false;
export function init_TextResult() {
if (__wakaru_init_TextResult_initialized) return;
__wakaru_init_TextResult_initialized = true;
TextResult = class {
    pages = [];
    text = "";
    total = 0;
    getPageText(num) {
        for (const pageData of this.pages){
            if (pageData.num === num) return pageData.text;
        }
        return "";
    }
    constructor(total){
        this.total = total;
    }
};

}
