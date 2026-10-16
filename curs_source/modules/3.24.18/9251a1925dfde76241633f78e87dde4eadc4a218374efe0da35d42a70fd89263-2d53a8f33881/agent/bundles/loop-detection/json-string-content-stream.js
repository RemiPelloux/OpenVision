var SIMPLE_ESCAPES, JsonStringContentStream;
export { JsonStringContentStream, SIMPLE_ESCAPES };
var __wakaru_init_json_string_content_stream_initialized = false;
export function init_json_string_content_stream() {
if (__wakaru_init_json_string_content_stream_initialized) return;
__wakaru_init_json_string_content_stream_initialized = true;
"use strict";
SIMPLE_ESCAPES = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	"
};
JsonStringContentStream = class {
    constructor(){
        this.inString = false;
        this.inEscape = false;
    }
    push(chunk) {
        let out = "";
        for (const char of chunk){
            if (!this.inString) {
                if (char === '"') {
                    this.inString = true;
                }
                continue;
            }
            if (this.unicodeHex !== void 0) {
                this.unicodeHex += char;
                if (this.unicodeHex.length === 4) {
                    const codeUnit = Number.parseInt(this.unicodeHex, 16);
                    if (!Number.isNaN(codeUnit)) {
                        out += String.fromCharCode(codeUnit);
                    }
                    this.unicodeHex = void 0;
                }
                continue;
            }
            if (this.inEscape) {
                this.inEscape = false;
                if (char === "u") {
                    this.unicodeHex = "";
                } else {
                    out += SIMPLE_ESCAPES[char] ?? char;
                }
                continue;
            }
            if (char === "\\") {
                this.inEscape = true;
            } else if (char === '"') {
                this.inString = false;
                out += "\n";
            } else {
                out += char;
            }
        }
        return out;
    }
};

}
