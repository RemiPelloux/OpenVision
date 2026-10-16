import { require_EndOfFileStream } from "./EndOfFileStream.js";
import { require_StreamReader } from "./StreamReader.js";
var __wakaru_require_lib3_cache;
export function require_lib3() {
if (__wakaru_require_lib3_cache) return __wakaru_require_lib3_cache;
var exports2 = {};
__wakaru_require_lib3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.StreamReader = exports2.EndOfStreamError = void 0;
var EndOfFileStream_1 = require_EndOfFileStream();
Object.defineProperty(exports2, "EndOfStreamError", {
    enumerable: true,
    get: function() {
        return EndOfFileStream_1.EndOfStreamError;
    }
});
var StreamReader_1 = require_StreamReader();
Object.defineProperty(exports2, "StreamReader", {
    enumerable: true,
    get: function() {
        return StreamReader_1.StreamReader;
    }
});

return exports2;
}
