import { require_cjs2 } from "../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
var __wakaru_require_http_headers_cache;
export function require_http_headers() {
if (__wakaru_require_http_headers_cache) return __wakaru_require_http_headers_cache;
var exports2 = {};
__wakaru_require_http_headers_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.encodeBinaryHeader = encodeBinaryHeader2;
exports2.decodeBinaryHeader = decodeBinaryHeader2;
exports2.appendHeaders = appendHeaders2;
var protobuf_1 = require_cjs2();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
function encodeBinaryHeader2(value) {
    let bytes;
    if (typeof value == "object" && "getType" in value) {
        bytes = value.toBinary();
    } else if (typeof value == "string") {
        bytes = new TextEncoder().encode(value);
    } else {
        bytes = value instanceof Uint8Array ? value : new Uint8Array(value);
    }
    return protobuf_1.protoBase64.enc(bytes).replace(/=+$/, "");
}
function decodeBinaryHeader2(value, type2, options2) {
    try {
        const bytes = protobuf_1.protoBase64.dec(value);
        if (type2) {
            return type2.fromBinary(bytes, options2);
        }
        return bytes;
    } catch (e) {
        throw connect_error_js_1.ConnectError.from(e, code_js_1.Code.DataLoss);
    }
}
function appendHeaders2(...headers) {
    const h = new Headers();
    for (const e of headers){
        e.forEach((value, key)=>{
            h.append(key, value);
        });
    }
    return h;
}

return exports2;
}
