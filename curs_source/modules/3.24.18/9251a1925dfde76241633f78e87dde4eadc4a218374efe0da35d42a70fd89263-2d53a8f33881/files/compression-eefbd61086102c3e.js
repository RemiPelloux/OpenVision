import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
var __wakaru_require_compression_cache;
export function require_compression() {
if (__wakaru_require_compression_cache) return __wakaru_require_compression_cache;
var exports2 = {};
__wakaru_require_compression_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.compressedFlag = void 0;
exports2.compressionNegotiate = compressionNegotiate2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
exports2.compressedFlag = 1;
function compressionNegotiate2(available, requested, accepted, headerNameAcceptEncoding) {
    let request3 = null;
    let response = null;
    let error3 = void 0;
    if (requested !== null && requested !== "identity") {
        const found = available.find((c)=>c.name === requested);
        if (found) {
            request3 = found;
        } else {
            const acceptable = available.map((c)=>c.name).join(",");
            error3 = new connect_error_js_1.ConnectError(`unknown compression "${requested}": supported encodings are ${acceptable}`, code_js_1.Code.Unimplemented, {
                [headerNameAcceptEncoding]: acceptable
            });
        }
    }
    if (accepted === null || accepted === "") {
        response = request3;
    } else {
        const acceptNames = accepted.split(",").map((n)=>n.trim());
        for (const name17 of acceptNames){
            const found = available.find((c)=>c.name === name17);
            if (found) {
                response = found;
                break;
            }
        }
    }
    return {
        request: request3,
        response,
        error: error3
    };
}

return exports2;
}
