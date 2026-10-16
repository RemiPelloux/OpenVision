import { require_lib3 } from "../../../../peek-readable@4.1.0/node_modules/peek-readable/lib/index.js";
import { require_BufferTokenizer } from "./BufferTokenizer.js";
import { require_ReadStreamTokenizer } from "./ReadStreamTokenizer.js";
var __wakaru_require_core4_cache;
export function require_core4() {
if (__wakaru_require_core4_cache) return __wakaru_require_core4_cache;
var exports2 = {};
__wakaru_require_core4_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.fromBuffer = exports2.fromStream = exports2.EndOfStreamError = void 0;
var ReadStreamTokenizer_1 = require_ReadStreamTokenizer();
var BufferTokenizer_1 = require_BufferTokenizer();
var peek_readable_1 = require_lib3();
Object.defineProperty(exports2, "EndOfStreamError", {
    enumerable: true,
    get: function() {
        return peek_readable_1.EndOfStreamError;
    }
});
function fromStream2(stream3, fileInfo) {
    fileInfo = fileInfo ? fileInfo : {};
    return new ReadStreamTokenizer_1.ReadStreamTokenizer(stream3, fileInfo);
}
exports2.fromStream = fromStream2;
function fromBuffer2(uint8Array, fileInfo) {
    return new BufferTokenizer_1.BufferTokenizer(uint8Array, fileInfo);
}
exports2.fromBuffer = fromBuffer2;

return exports2;
}
