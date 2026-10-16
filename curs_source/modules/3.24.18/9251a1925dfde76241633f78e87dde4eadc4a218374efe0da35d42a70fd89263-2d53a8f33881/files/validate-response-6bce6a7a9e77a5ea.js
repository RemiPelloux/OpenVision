import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_headers3 } from "./headers.js";
import { require_http_status2 } from "../protocol-grpc/http-status.js";
import { require_trailer_status } from "../protocol-grpc/trailer-status.js";
var __wakaru_require_validate_response2_cache;
export function require_validate_response2() {
if (__wakaru_require_validate_response2_cache) return __wakaru_require_validate_response2_cache;
var exports2 = {};
__wakaru_require_validate_response2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateResponse = validateResponse2;
exports2.validateResponseWithCompression = validateResponseWithCompression2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var headers_js_1 = require_headers3();
var http_status_js_1 = require_http_status2();
var trailer_status_js_1 = require_trailer_status();
function validateResponse2(status, headers) {
    var _a18;
    if (status >= 200 && status < 300) {
        return {
            foundStatus: headers.has(headers_js_1.headerGrpcStatus),
            headerError: (0, trailer_status_js_1.findTrailerError)(headers)
        };
    }
    throw new connect_error_js_1.ConnectError(decodeURIComponent((_a18 = headers.get(headers_js_1.headerGrpcMessage)) !== null && _a18 !== void 0 ? _a18 : `HTTP ${status}`), (0, http_status_js_1.codeFromHttpStatus)(status), headers);
}
function validateResponseWithCompression2(acceptCompression, status, headers) {
    const { foundStatus, headerError } = validateResponse2(status, headers);
    let compression;
    const encoding = headers.get(headers_js_1.headerEncoding);
    if (encoding !== null && encoding.toLowerCase() !== "identity") {
        compression = acceptCompression.find((c)=>c.name === encoding);
        if (!compression) {
            throw new connect_error_js_1.ConnectError(`unsupported response encoding "${encoding}"`, code_js_1.Code.Internal, headers);
        }
    }
    return {
        foundStatus,
        compression,
        headerError
    };
}

return exports2;
}
