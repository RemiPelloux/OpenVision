var Code;
export { Code };
var __wakaru_init_code_initialized = false;
export function init_code() {
if (__wakaru_init_code_initialized) return;
__wakaru_init_code_initialized = true;
(function(Code2) {
    Code2[Code2["Canceled"] = 1] = "Canceled";
    Code2[Code2["Unknown"] = 2] = "Unknown";
    Code2[Code2["InvalidArgument"] = 3] = "InvalidArgument";
    Code2[Code2["DeadlineExceeded"] = 4] = "DeadlineExceeded";
    Code2[Code2["NotFound"] = 5] = "NotFound";
    Code2[Code2["AlreadyExists"] = 6] = "AlreadyExists";
    Code2[Code2["PermissionDenied"] = 7] = "PermissionDenied";
    Code2[Code2["ResourceExhausted"] = 8] = "ResourceExhausted";
    Code2[Code2["FailedPrecondition"] = 9] = "FailedPrecondition";
    Code2[Code2["Aborted"] = 10] = "Aborted";
    Code2[Code2["OutOfRange"] = 11] = "OutOfRange";
    Code2[Code2["Unimplemented"] = 12] = "Unimplemented";
    Code2[Code2["Internal"] = 13] = "Internal";
    Code2[Code2["Unavailable"] = 14] = "Unavailable";
    Code2[Code2["DataLoss"] = 15] = "DataLoss";
    Code2[Code2["Unauthenticated"] = 16] = "Unauthenticated";
})(Code || (Code = {}));

}
