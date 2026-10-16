import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_node_error_cache;
export function require_node_error() {
if (__wakaru_require_node_error_cache) return __wakaru_require_node_error_cache;
var exports2 = {};
__wakaru_require_node_error_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.H2Code = void 0;
exports2.connectErrorFromNodeReason = connectErrorFromNodeReason2;
exports2.unwrapNodeErrorChain = unwrapNodeErrorChain2;
exports2.getNodeErrorProps = getNodeErrorProps2;
exports2.connectErrorFromH2ResetCode = connectErrorFromH2ResetCode2;
var connect_1 = require_cjs3();
function connectErrorFromNodeReason2(reason) {
    let code = connect_1.Code.Internal;
    const chain = unwrapNodeErrorChain2(reason).map(getNodeErrorProps2);
    if (chain.some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
        code = connect_1.Code.Aborted;
    } else if (chain.some((p2)=>p2.code == "ERR_STREAM_DESTROYED" || p2.code == "ERR_HTTP2_INVALID_STREAM" || p2.code == "ECONNRESET")) {
        code = connect_1.Code.Aborted;
    } else if (chain.some((p2)=>p2.code == "ETIMEDOUT" || p2.code == "ENOTFOUND" || p2.code == "EAI_AGAIN" || p2.code == "ECONNREFUSED")) {
        code = connect_1.Code.Unavailable;
    }
    const ce2 = connect_1.ConnectError.from(reason, code);
    if (ce2 !== reason) {
        ce2.cause = reason;
    }
    return ce2;
}
function unwrapNodeErrorChain2(reason) {
    const chain = [];
    for(;;){
        if (!(reason instanceof Error)) {
            break;
        }
        if (chain.includes(reason)) {
            break;
        }
        chain.push(reason);
        if (!("cause" in reason)) {
            break;
        }
        reason = reason.cause;
    }
    return chain;
}
function getNodeErrorProps2(reason) {
    const props = {};
    if (reason instanceof Error) {
        if ("code" in reason && typeof reason.code == "string") {
            props.code = reason.code;
        }
        if ("syscall" in reason && typeof reason.syscall == "string") {
            props.syscall = reason.syscall;
        }
    }
    return props;
}
function connectErrorFromH2ResetCode2(rstCode) {
    switch(rstCode){
        case H2Code2.PROTOCOL_ERROR:
        case H2Code2.INTERNAL_ERROR:
        case H2Code2.FLOW_CONTROL_ERROR:
        case H2Code2.SETTINGS_TIMEOUT:
        case H2Code2.FRAME_SIZE_ERROR:
        case H2Code2.COMPRESSION_ERROR:
        case H2Code2.CONNECT_ERROR:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.Internal);
        case H2Code2.REFUSED_STREAM:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.Unavailable);
        case H2Code2.CANCEL:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.Canceled);
        case H2Code2.ENHANCE_YOUR_CALM:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.ResourceExhausted);
        case H2Code2.INADEQUATE_SECURITY:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.PermissionDenied);
        case H2Code2.HTTP_1_1_REQUIRED:
            return new connect_1.ConnectError(`http/2 stream closed with error code ${H2Code2[rstCode]} (0x${rstCode.toString(16)})`, connect_1.Code.PermissionDenied);
        case H2Code2.STREAM_CLOSED:
        default:
            break;
    }
    return void 0;
}
var H2Code2;
(function(H2Code3) {
    H2Code3[H2Code3["PROTOCOL_ERROR"] = 1] = "PROTOCOL_ERROR";
    H2Code3[H2Code3["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    H2Code3[H2Code3["FLOW_CONTROL_ERROR"] = 3] = "FLOW_CONTROL_ERROR";
    H2Code3[H2Code3["SETTINGS_TIMEOUT"] = 4] = "SETTINGS_TIMEOUT";
    H2Code3[H2Code3["STREAM_CLOSED"] = 5] = "STREAM_CLOSED";
    H2Code3[H2Code3["FRAME_SIZE_ERROR"] = 6] = "FRAME_SIZE_ERROR";
    H2Code3[H2Code3["REFUSED_STREAM"] = 7] = "REFUSED_STREAM";
    H2Code3[H2Code3["CANCEL"] = 8] = "CANCEL";
    H2Code3[H2Code3["COMPRESSION_ERROR"] = 9] = "COMPRESSION_ERROR";
    H2Code3[H2Code3["CONNECT_ERROR"] = 10] = "CONNECT_ERROR";
    H2Code3[H2Code3["ENHANCE_YOUR_CALM"] = 11] = "ENHANCE_YOUR_CALM";
    H2Code3[H2Code3["INADEQUATE_SECURITY"] = 12] = "INADEQUATE_SECURITY";
    H2Code3[H2Code3["HTTP_1_1_REQUIRED"] = 13] = "HTTP_1_1_REQUIRED";
})(H2Code2 || (exports2.H2Code = H2Code2 = {}));

return exports2;
}
