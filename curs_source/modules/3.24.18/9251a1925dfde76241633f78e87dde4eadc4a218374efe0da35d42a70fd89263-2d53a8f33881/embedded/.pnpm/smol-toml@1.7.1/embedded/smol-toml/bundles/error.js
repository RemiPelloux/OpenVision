import { getLineColFromPtr, makeCodeBlock } from "../../../../../../dashboard_connect_exports.js";
var TomlError;
export { TomlError };
var __wakaru_init_error_initialized = false;
export function init_error() {
if (__wakaru_init_error_initialized) return;
__wakaru_init_error_initialized = true;
TomlError = class extends Error {
    line;
    column;
    codeblock;
    constructor(message, options2){
        const [line, column] = getLineColFromPtr(options2.toml, options2.ptr);
        const codeblock = makeCodeBlock(options2.toml, line, column);
        super(`Invalid TOML document: ${message}

${codeblock}`, options2);
        this.line = line;
        this.column = column;
        this.codeblock = codeblock;
    }
};

}
