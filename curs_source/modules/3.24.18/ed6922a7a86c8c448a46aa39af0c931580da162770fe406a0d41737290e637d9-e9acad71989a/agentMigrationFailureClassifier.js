import { si } from "./HVr.js";
import { Rs } from "./code_3.js";
import { hg } from "./connect.js";
import { lCh } from "./gitFailurePatterns.js";
import { x } from "./tslib.es6.js";
var ZKv, uCh;
export { ZKv, uCh };
var __wakaru_QKv_initialized = false;
export function QKv() {
if (__wakaru_QKv_initialized) return;
__wakaru_QKv_initialized = true;
"use strict";
x(), hg(), si(), lCh(), ZKv = {
    [Rs.Canceled]: "connect_canceled",
    [Rs.Unknown]: "connect_unknown",
    [Rs.InvalidArgument]: "connect_invalid_argument",
    [Rs.DeadlineExceeded]: "connect_deadline_exceeded",
    [Rs.NotFound]: "connect_not_found",
    [Rs.AlreadyExists]: "connect_already_exists",
    [Rs.PermissionDenied]: "connect_permission_denied",
    [Rs.ResourceExhausted]: "connect_resource_exhausted",
    [Rs.FailedPrecondition]: "connect_failed_precondition",
    [Rs.Aborted]: "connect_aborted",
    [Rs.OutOfRange]: "connect_out_of_range",
    [Rs.Unimplemented]: "connect_unimplemented",
    [Rs.Internal]: "connect_internal",
    [Rs.Unavailable]: "connect_unavailable",
    [Rs.DataLoss]: "connect_data_loss",
    [Rs.Unauthenticated]: "connect_unauthenticated"
}, uCh = "Missing migration blob";

}
