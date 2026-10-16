import { sd } from "./chat_pb.js";
import { SQ } from "./requested_model_pb.js";
import { E } from "./tslib.es6.js";
var __wakaru_nrl_initialized = false;
export function nrl() {
if (__wakaru_nrl_initialized) return;
__wakaru_nrl_initialized = true;
"use strict";
E(), SQ(), sd();

}
