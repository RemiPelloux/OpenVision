import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_content_type2 } from "./content-type.js";
import { require_headers2 } from "./headers.js";
import { require_http_status2 } from "./http-status.js";
import { require_trailer_status } from "./trailer-status.js";
var __wakaru_require_validate_response3_cache;
export function require_validate_response3() {
if (__wakaru_require_validate_response3_cache) return __wakaru_require_validate_response3_cache;
var exports2 = {};
__wakaru_require_validate_response3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateResponse = validateResponse2;
exports2.validateResponseWithCompression = validateResponseWithCompression2;
var http_status_js_1 = require_http_status2();
var connect_error_js_1 = require_connect_error();
var trailer_status_js_1 = require_trailer_status();
var code_js_1 = require_code();
var headers_js_1 = require_headers2();
var content_type_js_1 = require_content_type2();
function validateResponse2(status, headers) {
    if (status != 200) {
        throw new connect_error_js_1.ConnectError(`HTTP ${status}`, (0, http_status_js_1.codeFromHttpStatus)(status), headers);
    }
    const mimeType = headers.get(headers_js_1.headerContentType);
    const parsedType2 = (0, content_type_js_1.parseContentType)(mimeType);
    if (parsedType2 == void 0) {
        throw new connect_error_js_1.ConnectError(`unsupported content type ${mimeType}`, code_js_1.Code.Unknown);
    }
    return {
        foundStatus: headers.has(headers_js_1.headerGrpcStatus),
        headerError: (0, trailer_status_js_1.findTrailerError)(headers)
    };
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
