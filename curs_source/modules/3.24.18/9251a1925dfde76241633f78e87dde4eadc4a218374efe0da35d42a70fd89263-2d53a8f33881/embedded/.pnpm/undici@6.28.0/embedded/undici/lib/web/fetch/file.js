import { require_symbols7 } from "./symbols.js";
import { require_webidl2 } from "./webidl.js";
var __wakaru_require_file2_cache;
export function require_file2() {
if (__wakaru_require_file2_cache) return __wakaru_require_file2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_file2_cache = module2;
"use strict";
var { Blob: Blob2, File: File3 } = require("node:buffer");
var { kState } = require_symbols7();
var { webidl } = require_webidl2();
var FileLike = class _FileLike {
    constructor(blobLike, fileName, options2 = {}){
        const n = fileName;
        const t = options2.type;
        const d = options2.lastModified ?? Date.now();
        this[kState] = {
            blobLike,
            name: n,
            type: t,
            lastModified: d
        };
    }
    stream(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.stream(...args);
    }
    arrayBuffer(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.arrayBuffer(...args);
    }
    slice(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.slice(...args);
    }
    text(...args) {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.text(...args);
    }
    get size() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.size;
    }
    get type() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].blobLike.type;
    }
    get name() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].name;
    }
    get lastModified() {
        webidl.brandCheck(this, _FileLike);
        return this[kState].lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
};
webidl.converters.Blob = webidl.interfaceConverter(Blob2);
function isFileLike(object4) {
    return object4 instanceof File3 || object4 && (typeof object4.stream === "function" || typeof object4.arrayBuffer === "function") && object4[Symbol.toStringTag] === "File";
}
module2.exports = {
    FileLike,
    isFileLike
};

return module2.exports;
}
