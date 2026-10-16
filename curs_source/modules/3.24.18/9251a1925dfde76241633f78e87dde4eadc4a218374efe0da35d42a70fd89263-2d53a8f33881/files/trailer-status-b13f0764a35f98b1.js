import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_http_headers } from "../http-headers.js";
import { require_status_pb } from "./gen/status_pb.js";
import { require_headers2 } from "./headers.js";
var __wakaru_require_trailer_status_cache;
export function require_trailer_status() {
if (__wakaru_require_trailer_status_cache) return __wakaru_require_trailer_status_cache;
var exports2 = {};
__wakaru_require_trailer_status_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.grpcStatusOk = void 0;
exports2.setTrailerStatus = setTrailerStatus2;
exports2.findTrailerError = findTrailerError;
var protobuf_1 = require_cjs2();
var status_pb_js_1 = require_status_pb();
var connect_error_js_1 = require_connect_error();
var http_headers_js_1 = require_http_headers();
var code_js_1 = require_code();
var headers_js_1 = require_headers2();
exports2.grpcStatusOk = "0";
function setTrailerStatus2(target, error3) {
    if (error3) {
        target.set(headers_js_1.headerGrpcStatus, error3.code.toString(10));
        target.set(headers_js_1.headerGrpcMessage, encodeURIComponent(error3.rawMessage));
        if (error3.details.length > 0) {
            const status = new status_pb_js_1.Status({
                code: error3.code,
                message: error3.rawMessage,
                details: error3.details.map((value)=>"getType" in value ? protobuf_1.Any.pack(value) : new protobuf_1.Any({
                        typeUrl: `type.googleapis.com/${value.type}`,
                        value: value.value
                    }))
            });
            target.set(headers_js_1.headerStatusDetailsBin, (0, http_headers_js_1.encodeBinaryHeader)(status));
        }
    } else {
        target.set(headers_js_1.headerGrpcStatus, exports2.grpcStatusOk.toString());
    }
    return target;
}
function findTrailerError(headerOrTrailer) {
    var _a18;
    const statusBytes = headerOrTrailer.get(headers_js_1.headerStatusDetailsBin);
    if (statusBytes != null) {
        const status = (0, http_headers_js_1.decodeBinaryHeader)(statusBytes, status_pb_js_1.Status);
        if (status.code == 0) {
            return void 0;
        }
        const error3 = new connect_error_js_1.ConnectError(status.message, status.code, headerOrTrailer);
        error3.details = status.details.map((any2)=>({
                type: any2.typeUrl.substring(any2.typeUrl.lastIndexOf("/") + 1),
                value: any2.value
            }));
        return error3;
    }
    const grpcStatus = headerOrTrailer.get(headers_js_1.headerGrpcStatus);
    if (grpcStatus != null) {
        if (grpcStatus === exports2.grpcStatusOk) {
            return void 0;
        }
        const code = parseInt(grpcStatus, 10);
        if (code in code_js_1.Code) {
            return new connect_error_js_1.ConnectError(decodeURIComponent((_a18 = headerOrTrailer.get(headers_js_1.headerGrpcMessage)) !== null && _a18 !== void 0 ? _a18 : ""), code, headerOrTrailer);
        }
        return new connect_error_js_1.ConnectError(`invalid grpc-status: ${grpcStatus}`, code_js_1.Code.Internal, headerOrTrailer);
    }
    return void 0;
}

return exports2;
}
