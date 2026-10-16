var __wakaru_require_code_cache;
export function require_code() {
if (__wakaru_require_code_cache) return __wakaru_require_code_cache;
var exports2 = {};
__wakaru_require_code_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Code = void 0;
var Code2;
(function(Code3) {
    Code3[Code3["Canceled"] = 1] = "Canceled";
    Code3[Code3["Unknown"] = 2] = "Unknown";
    Code3[Code3["InvalidArgument"] = 3] = "InvalidArgument";
    Code3[Code3["DeadlineExceeded"] = 4] = "DeadlineExceeded";
    Code3[Code3["NotFound"] = 5] = "NotFound";
    Code3[Code3["AlreadyExists"] = 6] = "AlreadyExists";
    Code3[Code3["PermissionDenied"] = 7] = "PermissionDenied";
    Code3[Code3["ResourceExhausted"] = 8] = "ResourceExhausted";
    Code3[Code3["FailedPrecondition"] = 9] = "FailedPrecondition";
    Code3[Code3["Aborted"] = 10] = "Aborted";
    Code3[Code3["OutOfRange"] = 11] = "OutOfRange";
    Code3[Code3["Unimplemented"] = 12] = "Unimplemented";
    Code3[Code3["Internal"] = 13] = "Internal";
    Code3[Code3["Unavailable"] = 14] = "Unavailable";
    Code3[Code3["DataLoss"] = 15] = "DataLoss";
    Code3[Code3["Unauthenticated"] = 16] = "Unauthenticated";
})(Code2 || (exports2.Code = Code2 = {}));

return exports2;
}
