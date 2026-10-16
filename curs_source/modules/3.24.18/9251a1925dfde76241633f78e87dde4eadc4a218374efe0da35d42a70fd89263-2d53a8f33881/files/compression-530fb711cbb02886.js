import { require_node_error } from "./node-error.js";
import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_compression2_cache;
export function require_compression2() {
if (__wakaru_require_compression2_cache) return __wakaru_require_compression2_cache;
var exports2 = {};
__wakaru_require_compression2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.compressionBrotli = exports2.compressionGzip = void 0;
var zlib2 = require("zlib");
var util_1 = require("util");
var connect_1 = require_cjs3();
var node_error_js_1 = require_node_error();
var gzip3 = (0, util_1.promisify)(zlib2.gzip);
var gunzip3 = (0, util_1.promisify)(zlib2.gunzip);
var brotliCompress3 = (0, util_1.promisify)(zlib2.brotliCompress);
var brotliDecompress3 = (0, util_1.promisify)(zlib2.brotliDecompress);
exports2.compressionGzip = {
    name: "gzip",
    compress (bytes) {
        return gzip3(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors2(gunzip3(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
exports2.compressionBrotli = {
    name: "br",
    compress (bytes) {
        return brotliCompress3(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors2(brotliDecompress3(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
function wrapZLibErrors2(promise, readMaxBytes) {
    return promise.catch((e)=>{
        const props = (0, node_error_js_1.getNodeErrorProps)(e);
        let code = connect_1.Code.Internal;
        let message = "decompression failed";
        switch(props.code){
            case "ERR_BUFFER_TOO_LARGE":
                code = connect_1.Code.ResourceExhausted;
                message = `message is larger than configured readMaxBytes ${readMaxBytes} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                code = connect_1.Code.InvalidArgument;
                break;
            default:
                if (props.code !== void 0 && props.code.startsWith("ERR__ERROR_FORMAT_")) {
                    code = connect_1.Code.InvalidArgument;
                }
                break;
        }
        return Promise.reject(new connect_1.ConnectError(message, code, void 0, void 0, e));
    });
}

return exports2;
}
