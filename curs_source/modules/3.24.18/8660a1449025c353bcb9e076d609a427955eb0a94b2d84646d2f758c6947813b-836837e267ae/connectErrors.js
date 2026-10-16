import { c_ } from "./async.cursor.js";
import { dp } from "./connect.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var r5m, _qa, s5m, o5m, bqa;
export { _qa, bqa, o5m, r5m, s5m };
var __wakaru_Ag_initialized = false;
export function Ag() {
if (__wakaru_Ag_initialized) return;
__wakaru_Ag_initialized = true;
"use strict";
E(), c_(), dp(), Hu(), r5m = [
    "nghttp2_internal_error",
    "stream-closed-after-headers",
    "stream closed after headers"
], _qa = new WeakMap, s5m = /^HTTP \d{3}$/, o5m = new Set([
    "Changes hash not available in cache.",
    "Diff not available in cache.",
    "pod not found in backgroundComposerPod kv"
]), bqa = "Background composer not found.";

}
