import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_content_type3 } from "./content-type.js";
import { require_headers4 } from "./headers.js";
import { require_http_status } from "./http-status.js";
var __wakaru_require_validate_response_cache;
export function require_validate_response() {
if (__wakaru_require_validate_response_cache) return __wakaru_require_validate_response_cache;
var exports2 = {};
__wakaru_require_validate_response_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.validateResponse = validateResponse2;
exports2.validateResponseWithCompression = validateResponseWithCompression2;
var protobuf_1 = require_cjs2();
var code_js_1 = require_code();
var http_status_js_1 = require_http_status();
var connect_error_js_1 = require_connect_error();
var content_type_js_1 = require_content_type3();
var headers_js_1 = require_headers4();
function validateResponse2(methodKind, useBinaryFormat, status, headers) {
    const mimeType = headers.get(headers_js_1.headerContentType);
    const parsedType2 = (0, content_type_js_1.parseContentType)(mimeType);
    if (status !== 200) {
        const errorFromStatus = new connect_error_js_1.ConnectError(`HTTP ${status}`, (0, http_status_js_1.codeFromHttpStatus)(status), headers);
        if (methodKind == protobuf_1.MethodKind.Unary && parsedType2 && !parsedType2.binary) {
            return {
                isUnaryError: true,
                unaryError: errorFromStatus
            };
        }
        throw errorFromStatus;
    }
    const allowedContentType = {
        binary: useBinaryFormat,
        stream: methodKind !== protobuf_1.MethodKind.Unary
    };
    if ((parsedType2 === null || parsedType2 === void 0 ? void 0 : parsedType2.binary) !== allowedContentType.binary || parsedType2.stream !== allowedContentType.stream) {
        throw new connect_error_js_1.ConnectError(`unsupported content type ${mimeType}`, parsedType2 === void 0 ? code_js_1.Code.Unknown : code_js_1.Code.Internal, headers);
    }
    return {
        isUnaryError: false
    };
}
function validateResponseWithCompression2(methodKind, acceptCompression, useBinaryFormat, status, headers) {
    let compression;
    const encoding = headers.get(methodKind == protobuf_1.MethodKind.Unary ? headers_js_1.headerUnaryEncoding : headers_js_1.headerStreamEncoding);
    if (encoding != null && encoding.toLowerCase() !== "identity") {
        compression = acceptCompression.find((c)=>c.name === encoding);
        if (!compression) {
            throw new connect_error_js_1.ConnectError(`unsupported response encoding "${encoding}"`, code_js_1.Code.Internal, headers);
        }
    }
    return Object.assign({
        compression
    }, validateResponse2(methodKind, useBinaryFormat, status, headers));
}

return exports2;
}
