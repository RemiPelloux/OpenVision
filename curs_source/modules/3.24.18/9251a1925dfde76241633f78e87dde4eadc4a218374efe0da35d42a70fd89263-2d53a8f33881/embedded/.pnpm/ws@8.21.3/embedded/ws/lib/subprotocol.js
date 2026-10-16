import { require_validation } from "./validation.js";
var __wakaru_require_subprotocol_cache;
export function require_subprotocol() {
if (__wakaru_require_subprotocol_cache) return __wakaru_require_subprotocol_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_subprotocol_cache = module2;
"use strict";
var { tokenChars } = require_validation();
function parse11(header) {
    const protocols = new Set();
    let start = -1;
    let end = -1;
    let i = 0;
    for(i; i < header.length; i++){
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
            if (start === -1) {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const protocol2 = header.slice(start, end);
            if (protocols.has(protocol2)) {
                throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
            }
            protocols.add(protocol2);
            start = end = -1;
        } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
        }
    }
    if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
    }
    const protocol = header.slice(start, i);
    if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
    }
    protocols.add(protocol);
    return protocols;
}
module2.exports = {
    parse: parse11
};

return module2.exports;
}
