import { require_validation } from "./validation.js";
var __wakaru_require_extension_cache;
export function require_extension() {
if (__wakaru_require_extension_cache) return __wakaru_require_extension_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_extension_cache = module2;
"use strict";
var { tokenChars } = require_validation();
function push(dest, name17, elem) {
    if (dest[name17] === void 0) dest[name17] = [
        elem
    ];
    else dest[name17].push(elem);
}
function parse11(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for(; i < header.length; i++){
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (i !== 0 && (code === 32 || code === 9)) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 59 || code === 44) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                const name17 = header.slice(start, end);
                if (code === 44) {
                    push(offers, name17, params);
                    params = Object.create(null);
                } else {
                    extensionName = name17;
                }
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else if (paramName === void 0) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 32 || code === 9) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 59 || code === 44) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 44) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = void 0;
                }
                start = end = -1;
            } else if (code === 61 && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else {
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 34 && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 92) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
            } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 32 || code === 9)) {
                if (end === -1) end = i;
            } else if (code === 59 || code === 44) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                let value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, "");
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 44) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = void 0;
                }
                paramName = void 0;
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        }
    }
    if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === void 0) {
        push(offers, token, params);
    } else {
        if (paramName === void 0) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ""));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
function format2(extensions) {
    return Object.keys(extensions).map((extension3)=>{
        let configurations = extensions[extension3];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map((params)=>{
            return [
                extension3
            ].concat(Object.keys(params).map((k2)=>{
                let values = params[k2];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map((v2)=>v2 === true ? k2 : `${k2}=${v2}`).join("; ");
            })).join("; ");
        }).join(", ");
    }).join(", ");
}
module2.exports = {
    format: format2,
    parse: parse11
};

return module2.exports;
}
