var ParseError, LF, CR, SPACE;
export { CR, LF, ParseError, SPACE };
var __wakaru_init_dist17_initialized = false;
export function init_dist17() {
if (__wakaru_init_dist17_initialized) return;
__wakaru_init_dist17_initialized = true;
ParseError = class extends Error {
    constructor(message, options2){
        super(message), this.name = "ParseError", this.type = options2.type, this.field = options2.field, this.value = options2.value, this.line = options2.line;
    }
};
LF = 10;
CR = 13;
SPACE = 32;

}
