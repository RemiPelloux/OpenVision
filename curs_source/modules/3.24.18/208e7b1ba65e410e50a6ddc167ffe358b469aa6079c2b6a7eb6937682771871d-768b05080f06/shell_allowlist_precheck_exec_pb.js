import { F } from "./protobuf.js";
import { du } from "./shell_exec_pb.js";
import { h } from "./tslib.es6.js";
var __wakaru_vat_initialized = false;
export function vat() {
if (__wakaru_vat_initialized) return;
__wakaru_vat_initialized = true;
"use strict";
h(), F(), du();

}
