import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
var __wakaru_require_limit_io_cache;
export function require_limit_io() {
if (__wakaru_require_limit_io_cache) return __wakaru_require_limit_io_cache;
var exports2 = {};
__wakaru_require_limit_io_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateReadWriteMaxBytes = validateReadWriteMaxBytes2;
exports2.assertWriteMaxBytes = assertWriteMaxBytes2;
exports2.assertReadMaxBytes = assertReadMaxBytes2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var maxReadMaxBytes2 = 4294967295;
var maxWriteMaxBytes2 = maxReadMaxBytes2;
var defaultCompressMinBytes2 = 1024;
function validateReadWriteMaxBytes2(readMaxBytes, writeMaxBytes, compressMinBytes) {
    writeMaxBytes !== null && writeMaxBytes !== void 0 ? writeMaxBytes : writeMaxBytes = maxWriteMaxBytes2;
    readMaxBytes !== null && readMaxBytes !== void 0 ? readMaxBytes : readMaxBytes = maxReadMaxBytes2;
    compressMinBytes !== null && compressMinBytes !== void 0 ? compressMinBytes : compressMinBytes = defaultCompressMinBytes2;
    if (writeMaxBytes < 1 || writeMaxBytes > maxWriteMaxBytes2) {
        throw new connect_error_js_1.ConnectError(`writeMaxBytes ${writeMaxBytes} must be >= 1 and <= ${maxWriteMaxBytes2}`, code_js_1.Code.Internal);
    }
    if (readMaxBytes < 1 || readMaxBytes > maxReadMaxBytes2) {
        throw new connect_error_js_1.ConnectError(`readMaxBytes ${readMaxBytes} must be >= 1 and <= ${maxReadMaxBytes2}`, code_js_1.Code.Internal);
    }
    return {
        readMaxBytes,
        writeMaxBytes,
        compressMinBytes
    };
}
function assertWriteMaxBytes2(writeMaxBytes, bytesWritten) {
    if (bytesWritten > writeMaxBytes) {
        throw new connect_error_js_1.ConnectError(`message size ${bytesWritten} is larger than configured writeMaxBytes ${writeMaxBytes}`, code_js_1.Code.ResourceExhausted);
    }
}
function assertReadMaxBytes2(readMaxBytes, bytesRead, totalSizeKnown = false) {
    if (bytesRead > readMaxBytes) {
        let message = `message size is larger than configured readMaxBytes ${readMaxBytes}`;
        if (totalSizeKnown) {
            message = `message size ${bytesRead} is larger than configured readMaxBytes ${readMaxBytes}`;
        }
        throw new connect_error_js_1.ConnectError(message, code_js_1.Code.ResourceExhausted);
    }
}

return exports2;
}
