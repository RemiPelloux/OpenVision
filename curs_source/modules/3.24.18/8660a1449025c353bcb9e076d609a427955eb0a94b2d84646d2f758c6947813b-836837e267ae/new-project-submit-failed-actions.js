import { vu } from "./actions.js";
import { cTe } from "./composerErrorActions.js";
import { dp } from "./connect.js";
import { BS } from "./glass-toast.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var __wakaru_LBv_initialized = false;
export function LBv() {
if (__wakaru_LBv_initialized) return;
__wakaru_LBv_initialized = true;
"use strict";
E(), dp(), Hu(), vu(), cTe(), BS();

}
