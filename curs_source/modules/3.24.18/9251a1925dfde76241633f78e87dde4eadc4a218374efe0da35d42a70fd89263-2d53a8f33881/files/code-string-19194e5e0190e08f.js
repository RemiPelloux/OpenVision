import { require_code } from "../code.js";
var __wakaru_require_code_string_cache;
export function require_code_string() {
if (__wakaru_require_code_string_cache) return __wakaru_require_code_string_cache;
var exports2 = {};
__wakaru_require_code_string_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.codeToString = codeToString2;
exports2.codeFromString = codeFromString2;
var code_js_1 = require_code();
function codeToString2(value) {
    const name17 = code_js_1.Code[value];
    if (typeof name17 != "string") {
        return value.toString();
    }
    return name17[0].toLowerCase() + name17.substring(1).replace(/[A-Z]/g, (c)=>"_" + c.toLowerCase());
}
var stringToCode2;
function codeFromString2(value) {
    if (!stringToCode2) {
        stringToCode2 = {};
        for (const value2 of Object.values(code_js_1.Code)){
            if (typeof value2 == "string") {
                continue;
            }
            stringToCode2[codeToString2(value2)] = value2;
        }
    }
    return stringToCode2[value];
}

return exports2;
}
