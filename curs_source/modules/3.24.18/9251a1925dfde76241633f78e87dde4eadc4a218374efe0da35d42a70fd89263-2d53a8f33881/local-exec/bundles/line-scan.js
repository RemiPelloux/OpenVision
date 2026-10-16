var CharCode, LineBounds;
export { CharCode, LineBounds };
var __wakaru_init_line_scan_initialized = false;
export function init_line_scan() {
if (__wakaru_init_line_scan_initialized) return;
__wakaru_init_line_scan_initialized = true;
"use strict";
CharCode = {
    NUL: 0,
    CR: 13,
    DASH: 45,
    ZERO: 48,
    NINE: 57,
    COLON: 58
};
LineBounds = class {
    constructor(){
        this.lineEnd = 0;
        this.nextStart = 0;
    }
};

}
