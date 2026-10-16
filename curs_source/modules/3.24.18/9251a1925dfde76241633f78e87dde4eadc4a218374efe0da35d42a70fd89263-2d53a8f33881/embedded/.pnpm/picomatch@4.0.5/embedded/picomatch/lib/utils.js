import { require_constants14 } from "./constants.js";
var __wakaru_require_utils4_cache;
export function require_utils4() {
if (__wakaru_require_utils4_cache) return __wakaru_require_utils4_cache;
var exports2 = {};
__wakaru_require_utils4_cache = exports2;
"use strict";
var { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = require_constants14();
exports2.isObject = (val)=>val !== null && typeof val === "object" && !Array.isArray(val);
exports2.hasRegexChars = (str3)=>REGEX_SPECIAL_CHARS.test(str3);
exports2.isRegexChar = (str3)=>str3.length === 1 && exports2.hasRegexChars(str3);
exports2.escapeRegex = (str3)=>str3.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
exports2.toPosixSlashes = (str3)=>str3.replace(REGEX_BACKSLASH, "/");
exports2.isWindows = ()=>{
    if (typeof navigator !== "undefined" && navigator.platform) {
        const platform = navigator.platform.toLowerCase();
        return platform === "win32" || platform === "windows";
    }
    if (typeof process !== "undefined" && process.platform) {
        return process.platform === "win32";
    }
    return false;
};
exports2.removeBackslashes = (str3)=>{
    return str3.replace(REGEX_REMOVE_BACKSLASH, (match2)=>{
        return match2 === "\\" ? "" : match2;
    });
};
exports2.escapeLast = (input, char, lastIdx)=>{
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === "\\") return exports2.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};
exports2.removePrefix = (input, state = {})=>{
    let output = input;
    if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
    }
    return output;
};
exports2.wrapOutput = (input, state = {}, options2 = {})=>{
    const prepend = options2.contains ? "" : "^";
    const append = options2.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
    }
    return output;
};
exports2.basename = (path64, { windows } = {})=>{
    const segs = path64.split(windows ? /[\\/]/ : "/");
    const last = segs[segs.length - 1];
    if (last === "") {
        return segs[segs.length - 2];
    }
    return last;
};

return exports2;
}
