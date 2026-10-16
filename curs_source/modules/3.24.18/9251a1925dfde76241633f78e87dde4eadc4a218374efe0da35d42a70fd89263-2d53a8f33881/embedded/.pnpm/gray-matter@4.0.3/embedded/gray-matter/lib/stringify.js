import { require_defaults } from "./defaults.js";
import { require_engine } from "./engine.js";
import { require_kind_of } from "../../../../kind-of@6.0.3/node_modules/kind-of/index.js";
var __wakaru_require_stringify_cache;
export function require_stringify() {
if (__wakaru_require_stringify_cache) return __wakaru_require_stringify_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_stringify_cache = module2;
"use strict";
var typeOf = require_kind_of();
var getEngine = require_engine();
var defaults2 = require_defaults();
module2.exports = function(file, data, options2) {
    if (data == null && options2 == null) {
        switch(typeOf(file)){
            case "object":
                data = file.data;
                options2 = {};
                break;
            case "string":
                return file;
            default:
                {
                    throw new TypeError("expected file to be a string or object");
                }
        }
    }
    const str3 = file.content;
    const opts = defaults2(options2);
    if (data == null) {
        if (!opts.data) return file;
        data = opts.data;
    }
    const language = file.language || opts.language;
    const engine = getEngine(language, opts);
    if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
    }
    data = Object.assign({}, file.data, data);
    const open7 = opts.delimiters[0];
    const close = opts.delimiters[1];
    const matter2 = engine.stringify(data, options2).trim();
    let buf = "";
    if (matter2 !== "{}") {
        buf = newline(open7) + newline(matter2) + newline(close);
    }
    if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str3.indexOf(file.excerpt.trim()) === -1) {
            buf += newline(file.excerpt) + newline(close);
        }
    }
    return buf + newline(str3);
};
function newline(str3) {
    return str3.slice(-1) !== "\n" ? str3 + "\n" : str3;
}

return module2.exports;
}
