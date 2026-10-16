var __wakaru_require_ucs2length_cache;
export function require_ucs2length() {
if (__wakaru_require_ucs2length_cache) return __wakaru_require_ucs2length_cache;
var exports2 = {};
__wakaru_require_ucs2length_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
function ucs2length(str3) {
    const len = str3.length;
    let length = 0;
    let pos = 0;
    let value;
    while(pos < len){
        length++;
        value = str3.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
            value = str3.charCodeAt(pos);
            if ((value & 64512) === 56320) pos++;
        }
    }
    return length;
}
exports2.default = ucs2length;
ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';

return exports2;
}
