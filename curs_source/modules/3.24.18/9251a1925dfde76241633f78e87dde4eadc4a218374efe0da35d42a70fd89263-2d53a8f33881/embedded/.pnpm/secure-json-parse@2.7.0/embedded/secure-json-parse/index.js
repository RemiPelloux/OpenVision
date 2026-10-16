var __wakaru_require_secure_json_parse_cache;
export function require_secure_json_parse() {
if (__wakaru_require_secure_json_parse_cache) return __wakaru_require_secure_json_parse_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_secure_json_parse_cache = module2;
"use strict";
var hasBuffer = typeof Buffer !== "undefined";
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse2(text4, reviver, options2) {
    if (options2 == null) {
        if (reviver !== null && typeof reviver === "object") {
            options2 = reviver;
            reviver = void 0;
        }
    }
    if (hasBuffer && Buffer.isBuffer(text4)) {
        text4 = text4.toString();
    }
    if (text4 && text4.charCodeAt(0) === 65279) {
        text4 = text4.slice(1);
    }
    const obj = JSON.parse(text4, reviver);
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const protoAction = options2 && options2.protoAction || "error";
    const constructorAction = options2 && options2.constructorAction || "error";
    if (protoAction === "ignore" && constructorAction === "ignore") {
        return obj;
    }
    if (protoAction !== "ignore" && constructorAction !== "ignore") {
        if (suspectProtoRx.test(text4) === false && suspectConstructorRx.test(text4) === false) {
            return obj;
        }
    } else if (protoAction !== "ignore" && constructorAction === "ignore") {
        if (suspectProtoRx.test(text4) === false) {
            return obj;
        }
    } else {
        if (suspectConstructorRx.test(text4) === false) {
            return obj;
        }
    }
    return filter3(obj, {
        protoAction,
        constructorAction,
        safe: options2 && options2.safe
    });
}
function filter3(obj, { protoAction = "error", constructorAction = "error", safe } = {}) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (protoAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "__proto__")) {
                if (safe === true) {
                    return null;
                } else if (protoAction === "error") {
                    throw new SyntaxError("Object contains forbidden prototype property");
                }
                delete node.__proto__;
            }
            if (constructorAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
                if (safe === true) {
                    return null;
                } else if (constructorAction === "error") {
                    throw new SyntaxError("Object contains forbidden prototype property");
                }
                delete node.constructor;
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === "object") {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function parse11(text4, reviver, options2) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse2(text4, reviver, options2);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
function safeParse4(text4, reviver) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse2(text4, reviver, {
            safe: true
        });
    } catch (_e2) {
        return null;
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
module2.exports = parse11;
module2.exports.default = parse11;
module2.exports.parse = parse11;
module2.exports.safeParse = safeParse4;
module2.exports.scan = filter3;

return module2.exports;
}
